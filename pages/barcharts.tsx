import React from "react";
import path from "path";
import csv from "csvtojson";
import { GetStaticProps } from "next";

import Layout from "../src/components/Layout";

import styles from "../src/styles/Home.module.css";
import { Barchart } from "../src/charts/barcharts";
import { toBarchart } from "../src/helpers/functions/dataTransformation";

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
  atlasData: AtlasData[];
}

const AtlasPage: React.FC<AbacusPageProps> = ({ atlasData }) => {
  /*atlasData.forEach(
    (data) => (data["bohf"] = data.bohf === "Norge" ? "Norge" : "annet")
  );*/

  const bar = toBarchart(atlasData, ["andelRate1", "andelRate2"]);

  return (
    <>
      <Layout lang="no">
        <main>
          <div className={`${styles.atlasContent}`}>
            <Barchart
              data={atlasData.filter((data) => data.year === "snitt")}
              x={["andelRate1", "rate2"]}
              y="bohf"
              margin={{
                top: 20,
                bottom: 50,
                right: 20,
                left: 20,
              }}
              width={400}
              height={500}
              xLabel="X"
              yLabel="y"
              xMin={0}
              xMax={4}
              backgroundColor="#262626"
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
