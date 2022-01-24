import { visit } from "unist-util-visit";
import type { Root } from "hast";

export const rehypeWrapWithDiv = () => {
  return (tree) => {
    const divWrapper: Root = {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "div",
          children: tree.children,
          properties: { class: "main-content" },
        },
      ],
    };

    return divWrapper;
  };
};
