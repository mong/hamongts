import React from "react";
import { Markdown } from "../Markdown";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTransition, animated, easings } from "react-spring";

import classNames from "./popup.module.css";
import { useKeys, useOnClickOutside } from "../../helpers/hooks";

type PopUpProps = {
  btnComponent: () => React.ReactNode;
  children: React.ReactNode;
};

export const PopUp = ({ children, btnComponent }: PopUpProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const ref = useOnClickOutside<HTMLDivElement>(() => setActive(false), active);

  const transitions = useTransition(active, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: (it, ind, state) => ({
      easing: state === "leave" ? easings.easeInQuad : easings.easeOutQuad,
      duration: state === "leave" ? 75 : 100,
    }),
  });
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return;
    setActive(false);
    event.preventDefault();
  };
  useKeys(["Escape", "Esc"], "keydown", handleKeyDown);

  return (
    <div ref={ref}>
      <button
        className={classNames.popUpBtn}
        onClick={() => {
          setActive(!active);
        }}
      >
        {btnComponent()}
      </button>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              className={classNames.popUpContent}
              style={{
                ...styles,
              }}
            >
              <button
                className={classNames.closeBtn}
                style={{}}
                onClick={() => setActive(false)}
              >
                <AiOutlineCloseCircle style={{ alignSelf: "end" }} size={30} />
              </button>
              {children}
            </animated.div>
          )
      )}
    </div>
  );
};
