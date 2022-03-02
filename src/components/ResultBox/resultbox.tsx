import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { Carousel } from "../carousel";
import { CarouselItem } from "../carousel/carouelitem";

interface AtlasData {
  innbyggere: number;
  bohf: string;
  antall1: number;
  antall2: number;
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
  atlasData?: AtlasData[];
};

export const ResultBox: React.FC<ResultBoxProps> = ({
  title,
  intro,
  selection,
  result,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => setExpanded((state) => !state);
  const childrenRef = React.useRef<HTMLElement[]>([]);
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
            <h3> {title} </h3>
            <p>{intro}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Carousel active={0}>
            <CarouselItem label="Stolpediagram">Stolpediagram her</CarouselItem>
            <CarouselItem label="Kart">Kart her</CarouselItem>
            <CarouselItem label="Tabell" ref={childrenRef}>
              <div
                style={{
                  backgroundColor: "lightgrey",
                  width: "700px",
                  height: "600px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                Tabell her
              </div>
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
              aria-controls="panel2a-content"
              id="panel2a-header"
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
              textAlign: "justify",
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
