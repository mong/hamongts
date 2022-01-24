import React, { useState } from "react";
import style from "./listitem.module.css";

type ListItemProps = {
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const ATag = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === "a") {
        return child.props;
      }
    }
  });
  const nestedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type !== "a") {
        return child;
      }
    }
  });

  return (
    <li className={style.tocListItem}>
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
