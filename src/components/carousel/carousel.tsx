import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { GrNext, GrPrevious } from "react-icons/gr";
import { SelectChangeEvent } from "@mui/material";

import { useResizeObserver, usePrevious } from "../../helpers/hooks";
import { CarouselItemProps } from "./carouelitem";
import { CarouselSelect } from "./carouselselect";
import { CarouselBullets } from "./carouselbullets";

import styles from "./carousel.module.css";

type CarouselProps = {
  active?: number;
  children:
    | React.ReactElement<CarouselItemProps & React.RefObject<any>>
    | Array<React.ReactElement<CarouselItemProps & React.RefObject<any>>>;
};

export const Carousel: React.FC<CarouselProps> = ({ active, children }) => {
  const [activeComp, setActiveComp] = useState<number>(active ?? 0);
  const prevComp = usePrevious(activeComp);
  const wrapperRef = React.useRef<HTMLDivElement>();
  const wrapperWidth = useResizeObserver(wrapperRef)?.contentRect.width ?? 0;
  const height = 550;
  const width =
    wrapperWidth < 350 ? 350 : wrapperWidth > 700 ? 700 : wrapperWidth * 0.95;

  const numberOfChildren: number = React.Children.count(children);

  const options = React.Children.map(
    children,
    (child: React.ReactElement<CarouselItemProps>, i: number) => ({
      value: i,
      label: child ? child.props.label : `figur ${i + 1}`,
    })
  );

  const transition = useTransition(activeComp, {
    from: { opacity: 0, x: prevComp < activeComp ? width : -width },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: prevComp < activeComp ? -width : width },
    keys: `${activeComp}`,
  });

  if (numberOfChildren === 0) {
    return;
  }

  return (
    <div
      className="WWW"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
      }}
      ref={wrapperRef}
    >
      {numberOfChildren > 1 && (
        <CarouselSelect
          value={activeComp}
          id={"id"}
          label="Velg figur"
          options={options}
          onChange={(e: SelectChangeEvent<number>) =>
            setActiveComp(
              typeof e.target.value === "number" ? e.target.value : 0
            )
          }
        />
      )}
      <div className={styles.carouselWrapper}>
        <div className={styles.prev}>
          <button
            aria-label="show previous item"
            onClick={() => setActiveComp((comp) => (comp < 1 ? comp : --comp))}
          >
            <span>
              <GrPrevious size="28" />
            </span>
          </button>
        </div>
        <div
          className={styles.carousel}
          style={{
            overflowX: wrapperWidth < 350 ? "scroll" : "hidden",
            width: width + "px",
            height: height + "px",
          }}
        >
          {transition((styles, item) => {
            return (
              <animated.div style={{ position: "absolute", ...styles }}>
                {children[item]}
              </animated.div>
            );
          })}
        </div>
        <div className={styles.next}>
          <button
            aria-label="show next item"
            onClick={() =>
              setActiveComp((comp) =>
                comp < numberOfChildren - 1 ? ++comp : comp
              )
            }
          >
            <span>
              <GrNext size="28" />
            </span>
          </button>
        </div>
      </div>
      {numberOfChildren > 1 && (
        <CarouselBullets
          activeCarousel={activeComp}
          nrOfBullets={numberOfChildren}
          onClick={(i) => setActiveComp(i)}
        />
      )}
    </div>
  );
};
