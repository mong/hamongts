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

type ResultBoxProps = {
  title: string;
  carousel: string;
  intro: string;
  selection: string;
  result: string;
  id: string;
  lang: "nb" | "en" | "nn";
};

export const ResultBox: React.FC<ResultBoxProps> = ({
  title,
  intro,
  selection,
  result,
  id,
  lang,
  carousel,
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
                <CarouselItem key={bd.type + i + id} label={bd.type}>
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
                <CarouselItem key={bd.type + i + id} label={bd.type}>
                  <DataTable headers={bd.columns} data={figData} />
                </CarouselItem>
              );
            }
            if (bd.type === "map") {
              const jenks = bd.jenks
                ? bd.jenks.map((j) => parseFloat(j.max))
                : undefined;

              return (
                <CarouselItem key={bd.type + i + id} label={bd.type}>
                  {jenks ? (
                    <div style={{ width: "500px" }}>
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
                x="rateSnitt"
                colorBy="bohf"
                width={800}
                height={80}
                label={boxData[0].xLabel}
                backgroundColor="inherit"
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
