import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { PluggableList } from "react-markdown/lib/react-markdown";

/**
 * ## Wrapper for markdown content
 *
 *- Make it safe
 *- Put captions on images
 *- Use GitHub Flavored Markdown (gfm)
 */

type MarkdownProp = {
  children: string;
  lang?: string;
};

export const Markdown = ({ children, lang }: MarkdownProp) => {
  const rehypePlugins: PluggableList = [rehypeRaw, rehypeSlug];
  const remarkPlugins: PluggableList = [remarkGfm];
  const components: Components = {
    p({ children, node }) {
      if (
        node.children[0].type === "element" &&
        ["img", "a"].includes(node.children[0].tagName)
      ) {
        return <>{children}</>;
      }
      return <p>{children}</p>;
    },
    img({ src, alt, title }) {
      return (
        <figure>
          <img src={src} alt={alt} title={alt} />
          <figcaption>
            <strong>{lang === "en" ? "Figure:" : "Figur:"}</strong> {title}
          </figcaption>
        </figure>
      );
    },
    a({ href, children }) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {" "}
          {children}{" "}
        </a>
      );
    },
  };
  return (
    <>
      <ReactMarkdown
        rehypePlugins={rehypePlugins}
        remarkPlugins={remarkPlugins}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </>
  );
};
