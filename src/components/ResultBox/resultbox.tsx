import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useTransition, animated, easings } from "react-spring";

import { Carousel } from "../carousel";
import { CarouselItem } from "../carousel/carouelitem";
import { Barchart } from "../../charts/barcharts";
import { Abacus } from "../../charts/abacus";
import { AtlasData } from "../../types";
import classNames from "./resultbox.module.css";
import { DataContext } from "../Context";
import { Markdown } from "../Markdown";
import { DataTable } from "../Table";
import { Map, MapData } from "../../charts/map";
import { timeFormat } from "d3-time-format";

type ResultBoxProps = {
  title: string;
  carousel: string;
  intro: string;
  selection: string;
  result: string;
  id: string;
  lang: "nb" | "en" | "nn";
  published: Date;
  updated: Date;
};

export const ResultBox: React.FC<ResultBoxProps> = ({
  title,
  intro,
  selection,
  result,
  id,
  lang,
  carousel,
  published,
  updated,
}) => {
  const [expandedResultBox, setExpandedResultBox] =
    React.useState<boolean>(false);

  const atlasData: { atlasData: any; mapData: MapData } =
    React.useContext(DataContext);

  const mapData = atlasData.mapData;
  const boxData: any =
    atlasData.atlasData[carousel] !== undefined
      ? Object.values(JSON.parse(atlasData.atlasData[carousel]))[0]
      : undefined;

  const transitions = useTransition(expandedResultBox, {
    initial: { transform: "translate(0,0)" },
    from: { transform: "translate(0,-40px)" },
    enter: { transform: "translate(0,0)" },
    leave: { transform: "translate(0,-40px)" },

    config: (it, ind, state) => ({
      easing: easings.easeInQuad, // : easings.easeOutQuad,
      duration: 200,
    }),
  });

  const dataCarousel =
    boxData !== undefined ? (
      <Carousel active={0} selection={selection} lang={lang}>
        {boxData
          .map((bd, i, obj) => {
            const figData = obj.filter((o) => o.type === "data")[0]["data"];
            if (bd.type === "barchart") {
              return (
                <CarouselItem
                  style={{ width: "auto" }}
                  key={bd.type + i + id}
                  label={bd.type}
                >
                  <Barchart {...bd} data={figData} />
                </CarouselItem>
              );
            }
            if (bd.type === "table") {
              return (
                <CarouselItem
                  key={bd.type + i + id}
                  style={{ width: "auto" }}
                  label={bd.type}
                >
                  <DataTable
                    headers={bd.columns}
                    data={figData}
                    caption={bd.caption}
                  />
                </CarouselItem>
              );
            }
            if (bd.type === "map") {
              const jenks = bd.jenks
                ? bd.jenks.map((j) => parseFloat(j.grense))
                : undefined;

              return (
                <CarouselItem
                  key={bd.type + i + id}
                  style={{ width: "auto" }}
                  label={bd.type}
                >
                  {jenks ? (
                    <div
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        margin: "auto",
                      }}
                    >
                      <Map
                        mapData={mapData}
                        color={[
                          "rgba(171, 108, 166, 0.25)",
                          "rgba(171, 108, 166, 0.5)",
                          "rgba(171, 108, 166, 0.75)",
                          "rgba(171, 108, 166, 1.0)",
                        ]}
                        classes={jenks}
                        attrName={bd.x}
                        mapAttr={figData}
                        format={bd.format}
                        caption={bd.caption}
                      />
                    </div>
                  ) : (
                    <img src="/helseatlas/img/map.png" />
                  )}
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
  const abacusX: Exclude<keyof AtlasData, "year" | "bohf"> = boxData
    .filter((boxd) => boxd.type === "map")
    .map((boxd) => boxd.x)[0];

  const handleChange = (cb: React.Dispatch<React.SetStateAction<boolean>>) =>
    cb((state) => !state);
  return (
    <div id={id} className={classNames.resultBoxWrapper}>
      <Accordion
        disableGutters
        sx={{
          boxShadow: 6,
          borderBottom: "3px solid #033F85",
        }}
        expanded={expandedResultBox}
        onChange={() => handleChange(setExpandedResultBox)}
      >
        <AccordionSummary
          aria-controls={`${id}-content`}
          id={`${id}-header`}
          sx={{
            backgroundColor: "#FAFAFA",
            ":hover": {
              backgroundColor: expandedResultBox ? "" : "rgb(241, 241, 241)",
              transition: "200ms ease-in",
            },
          }}
        >
          <div className={classNames.resultBoxTitleWrapper}>
            <h3> {title} </h3>
            <Markdown lang={lang}>{intro}</Markdown>
            {figdata && (
              <Abacus
                data={figdata}
                x={abacusX}
                colorBy="bohf"
                label={boxData[0].xLabel}
                backgroundColor="inherit"
                format={boxData[0].format}
              />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F2F2F2",
          }}
        >
          {dataCarousel}

          <div className={classNames.resultBoxSelectionContent}>
            {" "}
            <Markdown lang={lang}>{result}</Markdown>
            {String(updated).substring(0, 10) !=
              String(published).substring(0, 10) && (
              <p>
                <em>Oppdatert {timeFormat("%d.%m.%Y")(new Date(updated))}</em>
              </p>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
      <div
        className={classNames.crossWrapper}
        role="button"
        aria-controls={`${id}-content-selection`}
        onClick={() => setExpandedResultBox(!expandedResultBox)}
      >
        <span className={classNames.horizontal}></span>
        {transitions(
          (styles, items) =>
            !items && (
              <animated.span
                className={classNames.vertical}
                style={{
                  ...styles,
                }}
              />
            )
        )}
      </div>
    </div>
  );
};
