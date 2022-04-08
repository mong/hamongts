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
import { DataTable } from "../Table";

type ResultBoxProps = {
  title: string;
  carousel: karusell;
  intro: string;
  selection: string;
  result: string;
  id: string;
  lang: "nb" | "en" | "nn";
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
  lang,
  carousel,
}) => {
  const [expandedResultBox, setExpandedResultBox] =
    React.useState<boolean>(false);
  const [expandedSelection, setExpandedSelection] =
    React.useState<boolean>(false);

  const atlasData = React.useContext(DataContext);
  const carouselData = carousel.data
    .replace(/data\//, "")
    .replace(/.csv$/, ".json");

  const boxData: any =
    atlasData[carouselData] !== undefined
      ? Object.values(JSON.parse(atlasData[carouselData]))[0]
      : undefined;

  const dataCarousel =
    boxData !== undefined ? (
      <Carousel active={0}>
        {boxData
          .map((bd, i, obj) => {
            const figData = obj.filter((o) => o.type === "data")[0]["data"];
            if (bd.type === "barchart") {
              return (
                <CarouselItem
                  key={bd.type + i + id}
                  label={i + 1 + ". Stolpediagram "}
                >
                  <Barchart
                    margin={{
                      top: 30,
                      bottom: 50,
                      right: 60,
                      left: 130,
                    }}
                    height={500}
                    {...bd}
                    data={figData}
                  />
                </CarouselItem>
              );
            }
            if (bd.type === "table") {
              return (
                <CarouselItem key={bd.type + i + id} label={i + 1 + ". Tabell"}>
                  <DataTable headers={bd.columns} data={figData} />
                </CarouselItem>
              );
            }
            if (bd.type === "map") {
              return (
                <CarouselItem key={bd.type + i + id} label={i + 1 + ". Kart"}>
                  <img src="/helseatlas/img/map.png" />
                </CarouselItem>
              );
            }

            return null;
          })
          .filter((elm) => elm !== null)}
      </Carousel>
    ) : undefined;

  const figdata: AtlasData[] = boxData
    ? boxData.filter((d) => d.type === "data")[0]["data"]
    : null;

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
            <Markdown lang={lang}>{intro}</Markdown>
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
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {dataCarousel}

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
              {lang === "nn" ? "Utval" : lang === "en" ? "Selection" : "Utvalg"}
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
