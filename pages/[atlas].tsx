import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../src/components/Layout";
import { TopBanner } from "../src/components/Atlas/topBanner";
import styles from "../src/styles/Atlas.module.css";

interface AtlasPageProps {
  content: string;
}

const AtlasPage: React.FC<AtlasPageProps> = ({ content }) => {
  const obj = JSON.parse(content);

  return (
    <>
      <Layout lang={obj.lang}>
        <main>
          <TopBanner
            mainTitle={obj.shortTitle}
            pdfUrl=""
            lang={obj.lang}
            ia={false}
          />
          <div className={`${styles.atlasContent}`}>
            <h1>{obj.mainTitle}</h1>
            <br />
            <div className="ingress">{obj.ingress}</div>
            <>{JSON.stringify(obj.innhold)}</>
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
