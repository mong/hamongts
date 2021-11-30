import path from "path";
import csv from "csvtojson";
import { GetStaticProps } from "next";
import fs from "fs";

import Layout from "../src/components/Layout";

import styles from "../src/styles/Home.module.css";
import { Abacus } from "../src/charts/abacus";



export interface AtlasData {
  innbyggere: number;
  bohf: string;
  antallInjeksjonerMedUL: number;
  antallInjeksjonerUtenUL: number;
  andelRate1: number;
  andelRate2: number;
  rate1: number;
  rate2: number;
  year: number | string;
}

interface AbacusPageProps {
  atlasData: AtlasData[],
}

const abacusData = [
  { bob: 10 },
  { bob: 30 },
  { bob: 20 },
  { bob: 13 },
  { bob: 32 },
  { bob: 13 },
  { bob: 60 },
  { bob: 34 },
  { bob: 52 },
];
const AtlasPage: React.FC<AbacusPageProps> = ({ atlasData }) => {
  atlasData.forEach(data => data["bohf"] = data.bohf === "Norge" ? "Norge" : "annet")

  console.log(atlasData)
  return (
    <>
      <Layout>
        <main>
          <div className={`${styles.atlasContent}`}>
            <Abacus
              data={atlasData.filter(data => data.year === "snitt")}
              x="rate1"
              colorBy="bohf"
              width={400}
              height={80}
              label="Label"
              xMin={0}
              xMax={3}
            />
          </div>
        </main>
      </Layout>
    </>
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

export default AtlasPage;
