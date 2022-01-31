import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import styles from "../../src/styles/Content.module.css";
import Layout from "../../src/components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const CONTENT_DIR = join(process.cwd(), "_posts/statisk");

interface Props {
  frontMatter: any;
  content;
}

const Content = ({ content, frontMatter }: Props) => {
  return (
    <Layout page={frontMatter.title}>
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
  );
};

export default Content;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fullPath = join(CONTENT_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(fullPath);

  const { content, data } = matter(file);

  return {
    props: {
      content,
      frontMatter: {
        ...data,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync(CONTENT_DIR).map((file) => ({
    params: { slug: file.replace(/.md?$/, "") },
  }));

  return { paths, fallback: false };
};
