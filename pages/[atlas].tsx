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
import styles from "../src/styles/Atlas.module.css";

interface AtlasPageProps {
  content: string;
}

const AtlasPage: React.FC<AtlasPageProps> = ({ content }) => {
  console.log(content);

  return (
    <>
      <Layout lang="no">
        <main>
          <div className={`${styles.atlasContent}`} style={{ display: "flex" }}>
            <>{content}</>
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const fullPath = path.join(
    process.cwd(),
    "_posts/atlas",
    `${context.params.atlas}.json`
  );
  const file = fs.readFileSync(fullPath);
  const { content } = matter(file);

  return {
    props: { content },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const paths = fs
    .readdirSync(atlasDir)
    .map((Info) => ({ params: { atlas: Info.replace(/.json?$/, "") } }));

  return {
    paths,
    fallback: false,
  };
};

export default AtlasPage;
