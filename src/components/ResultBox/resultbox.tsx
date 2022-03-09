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
import { AtlasData } from "../../types";
import styles from "./resultbox.module.css";
import { DataContext } from "../Context";
import { karusell } from "../Chapters";

type ResultBoxProps = {
  title: string;
  carousel: karusell;
  intro: string;
  selection: string;
  result: string;
  id: string;
  lang?: string;
  xlabel: string;
  ylabel: string;
};

export const ResultBox: React.FC<ResultBoxProps> = ({
  title,
  intro,
  selection,
  result,
  id,
  xlabel,
  ylabel,
  lang = "no",
  carousel,
}) => {
  const [expandedResultBox, setExpandedResultBox] =
    React.useState<boolean>(false);
  const [expandedSelection, setExpandedSelection] =
    React.useState<boolean>(false);

  const atlasData = React.useContext(DataContext);
  const figdata = atlasData[carousel.data];
  const handleChange = (cb: React.Dispatch<React.SetStateAction<boolean>>) =>
    cb((state) => !state);
  return (
    <div className={styles.resultBoxWrapper}>
      <Accordion
        sx={{
          boxShadow: 6,
          ":hover": {
            backgroundColor: expandedResultBox ? "" : "rgba(241, 241, 241,0.8)",
            transition: "200ms ease-in",
          },
        }}
        expanded={expandedResultBox}
        onChange={() => handleChange(setExpandedResultBox)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <div className={styles.resultBoxTitleWrapper}>
            <h3 id={title.toLocaleLowerCase().replace(/\s/g, "-")}>
              {" "}
              {title}{" "}
            </h3>
            <ReactMarkdown>{intro}</ReactMarkdown>
            {figdata && (
              <Abacus
                data={figdata}
                x="rateSnitt"
                colorBy="bohf"
                width={800}
                height={80}
                label={xlabel}
                xMin={0}
                xMax={7.0}
                backgroundColor="inherit"
              />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Carousel active={0}>
            <CarouselItem label="Stolpediagram">
              {figdata && (
                <Barchart
                  data={figdata}
                  x={["rateSnitt"]}
                  y="bohf"
                  margin={{
                    top: 30,
                    bottom: 50,
                    right: 60,
                    left: 130,
                  }}
                  height={500}
                  xLabel={xlabel}
                  yLabel={ylabel}
                  xMin={0}
                  xMax={7}
                  backgroundColor="white"
                />
              )}
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
            sx={{ boxShadow: 0 }}
            expanded={expandedSelection}
            onChange={() => handleChange(setExpandedSelection)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${id}-content-selection`}
              id={`${id}-content-selection`}
            >
              {lang === "no" ? "Utvalg" : "Selection"}
            </AccordionSummary>
            <AccordionDetails>
              <ReactMarkdown>{selection}</ReactMarkdown>
            </AccordionDetails>
          </Accordion>
          <div className={styles.resultBoxSelectionContent}>
            {" "}
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
