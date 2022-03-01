import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export type TextBoxProps = {
  children: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ children }) => {
  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
