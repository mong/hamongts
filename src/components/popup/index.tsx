import React from "react";

import { PopUpButton } from "./popupbtn";
import { PopUpContent } from "./popupcontent";

type PopUpProps = {
  btnComponent: () => React.ReactNode;
  children: React.ReactNode;
  innerContentStyle?: React.CSSProperties;
};

export const PopUp = ({
  children,
  btnComponent,
  innerContentStyle,
}: PopUpProps) => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div>
      <PopUpButton
        btnComponent={btnComponent}
        active={active}
        setActive={setActive}
      />
      {active && (
        <PopUpContent
          active={active}
          setActive={setActive}
          innerContentStyle={innerContentStyle}
        >
          {children}
        </PopUpContent>
      )}
    </div>
  );
};
