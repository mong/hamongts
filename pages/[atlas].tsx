import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";

import { remark } from "remark";
import html from "remark-html";
import Layout from "../src/components/Layout";
import { TopBanner } from "../src/components/Atlas/topBanner";

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

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
        <div
          style={{ width: "90%", textAlign: "justify", margin: "auto" }}
          className="atlas-content"
        >
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
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

  const htmlcontent = await markdownToHtml(content || "");
  return {
    props: { content: htmlcontent, frontMatter: { ...data } },
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
