import path from "path";
import Layout from "../src/components/Layout";
import { MainBanner } from "../src/components/MainBanner/MainBanner";

import { AtlasLink } from "../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../src/helpers/functions/markdownHelpers";

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
  atlasInfoNew: {
    article: string;
    frontMatter: {
      shortTitle: string;
      image: string;
      frontpagetext: string;
      date: Date;
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
      date={atlas.frontMatter.date}
      newlyUpdated={i === 0}
      lang={"no"}
    />
  ));
  const LinksNew = atlasInfoNew.map((atlas) => (
    <AtlasLink
      key={atlas.article}
      linkTo={atlas.article}
      imageSource={atlas.frontMatter.image}
      linkTitle={atlas.frontMatter.shortTitle}
      linkText={atlas.frontMatter.frontpagetext}
      date={atlas.frontMatter.date}
      lang={"no"}
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

  return {
    props: {
      atlasInfo,
      atlasInfoNew,
    },
  };
};

export default Home;
