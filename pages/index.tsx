import path from "path";
import Layout from "../src/components/Layout";
import { MainBanner } from "../src/components/MainBanner/MainBanner";

import { AtlasLink } from "../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../src/helpers/functions/markdownHelpers";
import fs from "fs";
import matter from "gray-matter";

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      shortTitle: string;
      image: string;
      frontpagetext: string;
    };
  }[];
  atlasInfoNew: {
    article: string;
    frontMatter: {
      shortTitle: string;
      image: string;
      frontpagetext: string;
    };
  }[];
}

const Home: React.FC<HomeProps> = ({ atlasInfo, atlasInfoNew }) => {
  const Links = atlasInfo.map((atlas, i) => (
    <AtlasLink
      key={atlas.article}
      linkTo={`utdatert/${atlas.article}`}
      imageSource={atlas.frontMatter.image}
      linkTitle={atlas.frontMatter.shortTitle}
      linkText={atlas.frontMatter.frontpagetext}
      wide={i === 0}
    />
  ));
  const LinksNew = atlasInfoNew.map((atlas) => (
    <AtlasLink
      key={atlas.article}
      linkTo={atlas.article}
      imageSource={atlas.frontMatter.image}
      linkTitle={atlas.frontMatter.shortTitle}
      linkText={atlas.frontMatter.frontpagetext}
    />
  ));

  return (
    <Layout lang="no">
      <main>
        <MainBanner />
        <div
          style={{
            maxWidth: "min(1216px, 95%)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "40px auto",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {LinksNew}
          {Links}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const atlasDir = path.join(process.cwd(), "_posts/tidligere_atlas");
  const atlasInfo = getMDInfo(atlasDir);
  const atlasDirNew = path.join(process.cwd(), "_posts/atlas");
  const atlasInfoNew = getMDInfo(atlasDirNew);
  const menuFile = fs.readFileSync(
    path.join(process.cwd(), "_posts/meny/norsk.md")
  );
  const { content, data } = matter(menuFile);

  return {
    props: {
      atlasInfo,
      atlasInfoNew,
      content,
      frontMatter: { ...data },
    },
  };
};

export default Home;
