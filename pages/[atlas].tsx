import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../src/components/Layout";
import { TopBanner } from "../src/components/Atlas/topBanner";
import styles from "../src/styles/Atlas.module.css";
import { ChapterProps, Chapters } from "../src/components/Chapters";
import { AtlasData } from "../src/types";
import csv from "csvtojson";
import { TableOfContents } from "../src/components/toc";
import { OrderedList } from "../src/components/toc/orderedlist";
import { ListItem } from "../src/components/toc/listitem";


interface AtlasPageProps {
  content: string;
  body: string;
  atlasData: AtlasData[];
}

type AtlasJson = {
  lang: "no" | "en";
  date: Date;
  filename: string;
  mainTitle: string;
  shortTitle: string;
  ingress: string;
  kapittel: ChapterProps[];
};

const AtlasPage: React.FC<AtlasPageProps> = ({ content, atlasData }) => {
  const obj: AtlasJson = JSON.parse(content);
  const tocContent = obj.kapittel.map((chapter) => {
    const level1 = chapter.overskrift;
    const level2 = chapter.innhold
      .filter((subChapter) => subChapter.type === "resultatboks")
      .map((subChapter) => subChapter["overskrift"]);
    return { level1, level2 };
  });



  return <div>{atlasData.map((dt, i) => <div key={`${dt.bohf}${i}`}>{"dt.bohf"}</div>)}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const fullPath = path.join(
    process.cwd(),
    "_posts/atlas",
    `${context.params.atlas}.json`
  );
  const file = fs.readFileSync(fullPath);
  const { content } = matter(file);

  const atlasData = await Promise.all(await fs.readdirSync("public/data/").map(async (files) => {
    const fileContent = path.join("public/data/", files);
    return await csv()
      .fromFile(fileContent);
  }));

  return {
    props: { content, atlasData },
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
