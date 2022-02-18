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
  };
}

export const AtlasContent: React.FC<AtlasContentProps> = ({
  content,
  frontMatter,
}) => {
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
              rehypePlugins={[
                rehypeWrapWithDiv,
                rehypeRaw,
                rehypeSlug,
                [
                  rehypeToc,
                  {
                    headings: ["h2", "h3"],
                  },
                ],
              ]}
              remarkPlugins={[remarkGfm]}
              components={{
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
                img({ src, alt, title }) {
                  return (
                    <figure>
                      <img src={src} alt={alt} title={alt} />
                      <figcaption>
                        <strong>Figur:</strong> {title}
                      </figcaption>
                    </figure>
                  );
                },
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        </main>
      </Layout>
    </>
  );
};
