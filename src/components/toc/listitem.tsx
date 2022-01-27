import React, { useState } from "react";
import { useIntersectionByID } from "../../helpers/hooks/useintersectionobserver";
import style from "./listitem.module.css";

type ListItemProps = {
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const ATag: React.HTMLProps<HTMLAnchorElement>[] = React.Children.map(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        if (child.type === "a") {
          return child.props;
        }
      }
    }
  );
  const elemID: string = (ATag[0].href ?? "").replace("#", "");
  const isVisbile = useIntersectionByID(elemID, "0px");
  const nestedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type !== "a") {
        return child;
      }
    }
  });

  return (
    <li
      className={`${style.tocListItem} ${isVisbile ? style.active : isVisbile}`}
    >
      <a
        {...ATag[0]}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      />
      {isExpanded && nestedChildren}
    </li>
  );
};
