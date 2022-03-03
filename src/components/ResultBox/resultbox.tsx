import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { Carousel } from "../carousel";
import { CarouselItem } from "../carousel/carouelitem";
import { Barchart } from "../../charts/barcharts";
import { Abacus } from "../../charts/abacus";

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

type ResultBoxProps = {
  title: string;
  intro: string;
  selection: string;
  result: string;
  atlasData: AtlasData[];
  id: string;
  lang?: string;
};

export const ResultBox: React.FC<ResultBoxProps> = ({
  title,
  intro,
  selection,
  result,
  id,
  atlasData,
  lang = "no",
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => setExpanded((state) => !state);
  return (
    <div
      style={{
        width: "900px",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <div
            style={{
              width: "98%",
              borderRadius: "10px",
              padding: "30px 20px 30px 20px",
              textAlign: "left",
            }}
          >
            <h3> {title} </h3>
            <ReactMarkdown>{intro}</ReactMarkdown>
            <Abacus
              data={atlasData.filter((data) => data.year === "snitt")}
              x="rate1"
              colorBy="bohf"
              width={800}
              height={80}
              label="Antall per 10 000"
              xMin={0}
              xMax={3.0}
            />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Carousel active={0}>
            <CarouselItem label="Stolpediagram">
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
                height={500}
                xLabel="Injeksjoner artitt per 1 000 innbyggere"
                yLabel="Opptaksområder"
                xMin={0}
                xMax={4}
                backgroundColor="white"
              />
            </CarouselItem>
            <CarouselItem label="Kart">
              {" "}
              <img src="/helseatlas/img/map.png"></img>
            </CarouselItem>
            <CarouselItem label="Tabell">
              <img src="/helseatlas/img/table.png"></img>
            </CarouselItem>
          </Carousel>
          <Accordion
            sx={{
              fontFamily: "Open Sans",
              boxShadow: 1,
              ":hover": {
                border: "2px solid #6CACE4",
                boxShadow: 1,
                transform: "none",
              },
            }}
            expanded={expanded}
            onChange={() => handleChange()}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${id}-content-selection`}
              id={`${id}-content-selection`}
            >
              Utvalg
            </AccordionSummary>
            <AccordionDetails>
              <ReactMarkdown>{selection}</ReactMarkdown>
            </AccordionDetails>
          </Accordion>
          <div
            style={{
              width: "98%",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "30px 20px 30px 20px",
              textAlign: "left",
            }}
          >
            {" "}
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
