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
  kapittel: ChapterProps[]
}


const AtlasPage: React.FC<AtlasPageProps> = ({ content, atlasData }) => {
  const obj: AtlasJson = JSON.parse(content);
  const tocContent = obj.kapittel.map((chapter) => {
    const level1 = chapter.overskrift;
    const level2 = chapter.innhold
      .filter((subChapter) => subChapter.type === "resultatboks")
      .map((subChapter) => subChapter["overskrift"]);
    return { level1, level2 };
  });

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
          <div className={`${styles.atlasContent}`} style={{ display: "flex" }}>
            <TableOfContents>
              <OrderedList>
                {tocContent.map((cont) => {
                  const level2Header = (
                    <OrderedList>
                      {cont.level2.map((level2) => {
                        return (
                          <ListItem
                            key={level2.toLowerCase().replace(/\s/g, "-")}
                          >
                            <a
                              href={`#${level2
                                .toLowerCase()
                                .replace(/\s/g, "-")}`}
                            >
                              {level2}
                            </a>
                          </ListItem>
                        );
                      })}
                    </OrderedList>
                  );

                  return (
                    <ListItem
                      key={cont.level1.toLowerCase().replace(/\s/g, "-")}
                    >
                      <a
                        href={`#${cont.level1
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        {cont.level1}
                      </a>
                      {level2Header}
                    </ListItem>
                  );
                })}
              </OrderedList>
            </TableOfContents>
            <div>
              <h1>{obj.mainTitle}</h1>
              <div className="ingress">{obj.ingress}</div>
              <Chapters innhold={obj.kapittel} atlasData={atlasData} />
            </div>
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
  const atlasDataDir = path.join(
    process.cwd(),
    "data/injeksjoner_artritt_med_uten_UL.csv"
  );
  const atlasData = await csv({
    delimiter: ";",
  }).fromFile(atlasDataDir);

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
