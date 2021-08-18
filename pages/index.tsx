import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

import styles from "../src/styles/Home.module.css";
import Layout from "../src/components/Layout";
import { AtlasLink } from "../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
//import { getMDInfo } from "../src/helpers/functions";

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      date: string;
      mainTitle: string;
      shortTitle: string;
      pdfUrl: string;
    };
  }[];
}

const Home: React.FC<HomeProps> = ({ atlasInfo }) => {
  const Links = atlasInfo.map((atlas) => (
    <AtlasLink
      key={atlas.article}
      linkTo={atlas.article}
      style={{ height: "200px" }}
    >
      <div>{atlas.frontMatter.shortTitle} </div>
    </AtlasLink>
  ));

  return (
    <Layout>
      <div className={styles.full_bleed}>
        <div className={styles.banner_article}>
          <div className={styles.banner_article__content}>
            <h2>Likeverdige helsetjenester - uansett hvor du bor?</h2>
            <p>
              Helseatlas sammenlikner befolkningens bruk av helsetjenester
              gjennom interaktive kart, rapporter og faktaark.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.full_bleed} ${styles.buttons_container}`}>
        <div className={`${styles.buttons}`}>
          <h2>Helseatlas</h2>
          <div className={styles.block_buttons}>{Links}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const getMDInfo = (dirPath: string) => {
    const files = fs.readdirSync(dirPath, "utf-8");
    const info = files
      .filter((fn) => fn.endsWith(".md"))
      .map((fn) => {
        const filePath = path.join(dirPath, fn);
        const rawContent = fs.readFileSync(filePath, {
          encoding: "utf-8",
        });

        const { data } = matter(rawContent);
        const article = fn.replace(/\.md$/, "");
        return {
          article,
          frontMatter: data,
        };
      })
      .sort(
        (a, b) =>
          Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date)
      )
      .map((article) => {
        return {
          ...article,
          frontMatter: {
            ...article.frontMatter,
          },
        };
      });

    return info;
  };
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      atlasInfo,
    },
  };
};

export default Home;
