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
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      atlasInfo,
    },
  };
};

export default Home;
