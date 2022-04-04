import path from "path";
import styles from "../../src/styles/Home.module.css";
import Layout from "../../src/components/Layout";
import { AtlasLink } from "../../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../../src/helpers/functions/markdownHelpers";
import { MainBanner } from "../../src/components/MainBanner/MainBanner";

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      shortTitle: string;
      image: string;
      frontpagetext: string;
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
    />
  ));

  return (
    <Layout lang="en">
      <MainBanner lang="en" />
      <div className={`${styles.full_bleed} ${styles.buttons_container}`}>
        <div className={`${styles.buttons}`}>
          <div className={styles.block_buttons}>{Links}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/en/tidligere_atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      atlasInfo,
    },
  };
};

export default Home;
