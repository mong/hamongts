import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Carousel } from "../carousel";
import { CarouselItem } from "../carousel/carouelitem";
import { Barchart } from "../../charts/barcharts";
import { Abacus } from "../../charts/abacus";
import { AtlasData } from "../../types";
import styles from "./resultbox.module.css";
import { DataContext } from "../Context";
import { karusell } from "../Chapters";
import { Markdown } from "../Markdown";

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
  const figdata: AtlasData[] = atlasData[carousel.data];
  const handleChange = (cb: React.Dispatch<React.SetStateAction<boolean>>) =>
    cb((state) => !state);
  return (
    <div id={id} className={styles.resultBoxWrapper}>
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
            <h3> {title} </h3>
            {figdata && (
              <Abacus
                data={figdata}
                x="rateSnitt"
                colorBy="bohf"
                width={800}
                height={80}
                label={xlabel}
                backgroundColor="inherit"
              />
            )}
            <Markdown lang={lang}>{intro}</Markdown>
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
                  backgroundColor="white"
                  annualVar={["rate2018", "rate2019", "rate2020"]}
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
              <Markdown lang={lang}>{selection}</Markdown>
            </AccordionDetails>
          </Accordion>
          <div className={styles.resultBoxSelectionContent}>
            {" "}
            <Markdown lang={lang}>{result}</Markdown>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
