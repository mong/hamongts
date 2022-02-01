import path from "path";
import styles from "../src/styles/Home.module.css";
import Layout from "../src/components/Layout";
import { AtlasLink } from "../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../src/helpers/functions/markdownHelpers";

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      shortTitle: string;
    };
  }[];
  atlasInfoNew: {
    article: string;
    frontMatter: {
      shortTitle: string;
    };
  }[];
}

const Home: React.FC<HomeProps> = ({ atlasInfo, atlasInfoNew }) => {
  const Links = atlasInfo.map((atlas) => (
    <AtlasLink
      key={atlas.article}
      linkTo={`utdatert/${atlas.article}`}
      style={{ height: "200px" }}
    >
      <div>{atlas.frontMatter.shortTitle} </div>
    </AtlasLink>
  ));
  const LinksNew = atlasInfoNew.map((atlas) => (
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
            <h1>Likeverdige helsetjenester - uansett hvor du bor?</h1>
            <p>
              Helseatlas sammenlikner befolkningens bruk av helsetjenester
              gjennom interaktive kart, rapporter og faktaark.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.full_bleed} ${styles.buttons_container}`}>
        <div className={`${styles.buttons}`}>
          <div className={styles.block_buttons}>
            {LinksNew}
            {Links}
          </div>
        </div>
      </div>
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
