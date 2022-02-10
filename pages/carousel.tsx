import React from "react";
import csv from "csvtojson";
import { GetStaticProps } from "next";
import path from "path";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Barchart } from "../src/charts/barcharts";
import Layout from "../src/components/Layout";
import { Carousel } from "../src/components/carousel";
import { CarouselItem } from "../src/components/carousel/carouelitem";

import styles from "../src/styles/Home.module.css";

interface AtlasData {
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

type CarouselPageProps = {
  children?: React.ReactNode;
  atlasData: AtlasData[];
};

const CarouselPage = ({ atlasData }: CarouselPageProps): React.ReactElement => {
  const childrenRef = React.useRef<HTMLElement[]>([]);
  return (
    <Layout lang="no">
      <div
        style={{
          width: "900px",
          backgroundColor: "#f5f5f3",
          borderRadius: "10px",
          padding: "15px",
          margin: "10px",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                width: "98%",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px 20px 30px 20px",
                textAlign: "justify",
              }}
            >
              <h2>Kroniske inflammatoriske leddsykdommer</h2>
              <p className="ingress">
                Mennesker som er rammet av artritt kan oppleve smerter og
                funksjonsbegrensninger som kan gi redusert livskvalitet og i
                alvorlige tilfeller også redusert livslengde. De siste årene har
                nye behandlingsmetoder gitt vesentlig bedre leveutsikter for
                mennesker med artritt.
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Carousel active={0}>
              <CarouselItem label="Stolpediagram1">
                <Barchart
                  data={atlasData.filter((data) => data.year === "snitt")}
                  x={["rate1", "rate2"]}
                  y="bohf"
                  margin={{
                    top: 30,
                    bottom: 50,
                    right: 60,
                    left: 130,
                  }}
                  width={650}
                  height={500}
                  xLabel="Injeksjoner artitt per 1 000 innbyggere"
                  yLabel="Opptaksimråde"
                  xMin={0}
                  xMax={4}
                  backgroundColor="white"
                />
              </CarouselItem>
              <CarouselItem label="Stolpediagram2">
                <Barchart
                  data={atlasData.filter((data) => data.year === "2018")}
                  x={["rate1"]}
                  y="bohf"
                  margin={{
                    top: 30,
                    bottom: 50,
                    right: 60,
                    left: 130,
                  }}
                  width={650}
                  height={500}
                  xLabel="Injeksjoner artitt per 1 000 innbyggere"
                  yLabel="Opptaksimråde"
                  xMin={0}
                  xMax={4}
                  backgroundColor="white"
                />
              </CarouselItem>
              <CarouselItem label="Item 3" ref={childrenRef}>
                <div
                  style={{
                    backgroundColor: "lightgrey",
                    width: "700px",
                    height: "600px",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                >
                  3{" "}
                </div>
              </CarouselItem>
            </Carousel>

            <div
              style={{
                width: "98%",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px 20px 30px 20px",
                textAlign: "justify",
              }}
            >
              Ved periodevise forverringer kan artritt behandles med injeksjon
              av kortisonpreparater direkte i leddene. Dette kan gjøres med
              eller uten ultralydveiledning, på sykehus eller hos
              privatpraktiserende spesialist (avtalespesialist). I perioden
              2018-2020 fikk bosatte i opptaksområdet Nordland omlag tre ganger
              så mange injeksjonsbehandlinger per 1000 innbyggere som bosatte i
              opptaksområdet Helgeland. Andel injeksjoner som ble gjort med
              ultralydveiledning varierte sterkt, fra 2,9% for bosatte i
              opptaksområdet Førde til 79% for bosatte i opptaksområdet
              Vestfold. Ultralydveiledning kan gi bedre treffsikkerhet og dermed
              potensielt bedre behandlingseffekt.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Layout>
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

export default CarouselPage;
