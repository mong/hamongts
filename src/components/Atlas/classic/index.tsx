import ReactMarkdown from "react-markdown";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { rehypeWrapWithDiv } from "../../../helpers/functions/rehypeplugins";
import remarkGfm from "remark-gfm";

import Layout from "../../Layout";
import { TopBanner } from "../topBanner";
import { TableOfContents } from "../../toc";
import { OrderedList } from "../../toc/orderedlist";
import { ListItem } from "../../toc/listitem";
import styles from "./classic.module.css";

interface AtlasContentProps {
  content: string;
  frontMatter: {
    num: string;
    mainTitle: string;
    shortTitle: string;
    pdfUrl: string;
    ia: boolean;
    lang: string;
    toc: boolean;
  };
}

export const AtlasContent: React.FC<AtlasContentProps> = ({
  content,
  frontMatter,
}) => {
  const rehypePlugins: any = [
    rehypeWrapWithDiv,
    rehypeRaw,
    rehypeSlug,
    frontMatter.toc
      ? [
          rehypeToc,
          {
            headings: ["h2", "h3"],
          },
        ]
      : (arnfinn) => arnfinn,
  ];

  const remarkPlugins = [remarkGfm];

  const components: any = {
    nav({ children, className }) {
      if (className === "toc") {
        return <TableOfContents> {children}</TableOfContents>;
      }
      return <nav>{children}</nav>;
    },
    ol({ children, className }) {
      if ((className ?? "").includes("toc")) {
        return <OrderedList> {children}</OrderedList>;
      }
      return <ol>{children}</ol>;
    },
    li({ children, className }) {
      if ((className ?? "").includes("toc")) {
        return <ListItem> {children}</ListItem>;
      }
      return <li>{children}</li>;
    },
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
            <strong>{frontMatter.lang === "en" ? "Figure:" : "Figur:"}</strong>{" "}
            {title}
          </figcaption>
        </figure>
      );
    },
  };

  const text = `
  <h1>${frontMatter.mainTitle}</h1>
  ${content}
  `;
  return (
    <>
      <Layout lang={frontMatter.lang}>
        <main>
          <TopBanner {...frontMatter} />
          <div className={`${styles.atlasContent}`} style={{ display: "flex" }}>
            <ReactMarkdown
              rehypePlugins={rehypePlugins}
              remarkPlugins={remarkPlugins}
              components={components}
            >
              {text}
            </ReactMarkdown>
          </div>
        </main>
      </Layout>
    </>
  );
};
