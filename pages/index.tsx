import path from "path";
import { GetStaticProps } from "next";
import fs from "fs";

import Layout from "../src/components/Layout";
import { MainBanner } from "../src/components/MainBanner/MainBanner";
import { AtlasLink } from "../src/components/Btns/AtlasLink";
import { getMDInfo } from "../src/helpers/functions/markdownHelpers";
import classNames from "../src/styles/Atlas.module.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

if (process.env.NEXT_PUBLIC_SENTRY) {
  try {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY,
      autoSessionTracking: true,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  } catch (error) {
    console.log(
      "Sentry not working with dsn=" + process.env.NEXT_PUBLIC_SENTRY
    );
  }
}

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      shortTitle: string;
      image: string;
      frontpagetext: string;
      date: Date;
    };
  }[];
}

const Home: React.FC<HomeProps> = ({ atlasInfo }) => {
  const Links = atlasInfo.map((atlas, i) => (
    <AtlasLink
      key={atlas.article}
      linkTo={`${atlas.article}`}
      imageSource={atlas.frontMatter.image}
      linkTitle={atlas.frontMatter.shortTitle}
      linkText={atlas.frontMatter.frontpagetext}
      wide={i === 0}
      date={atlas.frontMatter.date}
      newlyUpdated={i === 0}
      lang={"no"}
    />
  ));

  return (
    <Layout lang="no">
      <main>
        <MainBanner />
        <div className={classNames.atlasLinksWrapper}>{Links}</div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const atlasDir = path.join(process.cwd(), "_posts/tidligere_atlas");
  const atlasInfo = getMDInfo(atlasDir);
  const atlasDirNew = path.join(process.cwd(), "_posts/atlas");
  const atlasInfoNew = fs
    .readdirSync(atlasDirNew)
    .filter((fn) => fn.endsWith(".json"))
    .map((fn) => {
      const filePath = path.join(atlasDirNew, fn);
      const rawContent = fs.readFileSync(filePath, {
        encoding: "utf-8",
      });
      const parsedContent = JSON.parse(rawContent);
      const {
        image,
        frontpagetext,
        filename,
        publisert,
        lang,
        date,
        mainTitle,
        shortTitle,
      } = parsedContent;
      if (!publisert) {
        return null;
      }

      return {
        article: `v2/${filename}`,
        frontMatter: {
          shortTitle,
          image,
          frontpagetext,
          date,
          lang: lang === "en" ? lang : "no",
        },
      };
    })
    .filter((d) => d !== null);

  return {
    props: {
      atlasInfo: [...atlasInfoNew, ...atlasInfo],
    },
  };
};

export default Home;
