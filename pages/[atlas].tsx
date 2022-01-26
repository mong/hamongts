import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { rehypeWrapWithDiv } from "../src/helpers/functions/rehypeplugins";
import remarkGfm from "remark-gfm";

import Layout from "../src/components/Layout";
import { TopBanner } from "../src/components/Atlas/topBanner";
import { TableOfContents } from "../src/components/toc";
import { OrderedList } from "../src/components/toc/orderedlist";
import { ListItem } from "../src/components/toc/listitem";
import styles from "../src/styles/Home.module.css";

interface AtlasPageProps {
  content: string;
  frontMatter: {
    num: string;
    mainTitle: string;
    shortTitle: string;
    pdfUrl: string;
    ia: boolean;
    lang: string;
    report_text: string;
    map_text: string;
  };
}

const AtlasPage: React.FC<AtlasPageProps> = ({ content, frontMatter }) => {
  return (
    <>
      <Layout>
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
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const fullPath = path.join(atlasDir, `${context.params.atlas}.md`);
  const file = fs.readFileSync(fullPath);
  const { content, data } = matter(file);

  return {
    props: { content, frontMatter: { ...data } },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const paths = fs
    .readdirSync(atlasDir)
    .map((Info) => ({ params: { atlas: Info.replace(/.md?$/, "") } }));

  return {
    paths,
    fallback: false,
  };
};

export default AtlasPage;
