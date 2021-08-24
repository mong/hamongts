import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";

import Layout from "../src/components/Layout";
import { TopBanner } from "../src/components/Atlas/topBanner";
import styles from "../src/styles/Home.module.css";
import ReactMarkdown from "react-markdown";

interface AtlasPageProps {
  content: string;
  frontMatter: {
    date: string;
    mainTitle: string;
    shortTitle: string;
    pdfUrl: string;
  };
}

const AtlasPage: React.FC<AtlasPageProps> = ({ content, frontMatter }) => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <div>
          <TopBanner {...frontMatter} />
        </div>
        <div className={`${styles.atlasContent}`}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
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
