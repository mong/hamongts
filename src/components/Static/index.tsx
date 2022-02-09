import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Layout from "../Layout";
import styles from "./static.module.css";

interface PageContentProps {
  content: string;
  frontMatter: {
    title: string;
    lang: string;
  };
}

export const PageContent: React.FC<PageContentProps> = ({
  content,
  frontMatter,
}) => {
  return (
    <>
      <Layout lang={frontMatter.lang}>
        <div className={styles.container}>
          <div className={styles.article__title}>
            <h1>{frontMatter.title}</h1>
          </div>
          <div className={styles.article}>
            <div className={styles.article__content}>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageContent;