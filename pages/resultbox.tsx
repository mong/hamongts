import path from "path";
import csv from "csvtojson";
import { GetStaticProps } from "next";
import { ResultBox } from "../src/components/ResultBox";
import { AtlasData } from "../src/types";

interface AbacusPageProps {
  atlasData: AtlasData[];
}

const ResultBoxPage: React.FC<AbacusPageProps> = ({ atlasData }) => {
  return (
    <ResultBox
      title="Lorem ipsum dolor sit amet"
      intro="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat."
      result="Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum"
      selection="test"
      id="test"
      atlasData={atlasData}
      xlabel="Antall ditt per 10 000 datt"
      ylabel="Der vi bor"
    />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const atlasDataDir = path.join(
    process.cwd(),
    "data/injeksjoner_artritt_med_uten_UL.csv"
  );

  const atlasData = await csv({
    delimiter: ";",
  }).fromFile(atlasDataDir);

  return {
    props: {
      atlasData,
    },
  };
};

export default ResultBoxPage;
