import path from "path";
import Layout from "../../src/components/Layout";
import { MainBanner } from "../../src/components/MainBanner/MainBanner";

import { AtlasLink } from "../../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../../src/helpers/functions/markdownHelpers";

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
      linkTo={`en/${atlas.article}`}
      imageSource={atlas.frontMatter.image}
      linkTitle={atlas.frontMatter.shortTitle}
      linkText={atlas.frontMatter.frontpagetext}
      wide={i === 0}
      date={atlas.frontMatter.date}
      lang={"en"}
    />
  ));

  return (
    <Layout lang="en">
      <main>
        <MainBanner lang="en" />
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
          {Links}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const atlasDir = path.join(process.cwd(), "_posts/en/tidligere_atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      atlasInfo,
    },
  };
};

export default Home;
