import React, { Fragment } from "react";
import { TextBox } from "../TextBox";
import { FactBox } from "../Factbox";
import { ResultBox } from "../ResultBox";
import { AtlasData } from "../../types";

type Tekst = {
  type: "tekst";
  tekst: string;
};

type Faktaboks = {
  type: "faktaboks";
  overskrift: string;
  tekst: string;
};

type karusell = {
  presentasjonstype: string[];
  data: string;
  xlabel: string;
  ylabel: string;
};

type Resultatboks = {
  type: "resultatboks";
  overskrift: string;
  ingress: string;
  karusell: karusell;
  utvalg: string;
  resultat: string;
  data: AtlasData[];
};

type ChapterProps = {
  overskrift: string;
  innhold: (Tekst | Faktaboks | Resultatboks)[];
  atlasData: AtlasData[];
};

type ChaptersProps = {
  innhold: ChapterProps[];
  atlasData: AtlasData[];
};

const json2atlas = {
  tekst: TextBox,
  faktaboks: FactBox,
  resultatboks: ResultBox,
};

export const Chapters = ({ innhold, atlasData }: ChaptersProps) => {
  return (
    <>
      {innhold.map((chapter) => (
        <Chapter atlasData={atlasData} key={chapter.overskrift} {...chapter} />
      ))}
    </>
  );
};

const Chapter = ({ innhold, overskrift, atlasData }: ChapterProps) => {
  return (
    <>
      <h2 id={overskrift.toLowerCase().replace(" ", "-")}>{overskrift}</h2>
      <div>
        {innhold.map((box, index) => {
          const props =
            box.type === "faktaboks"
              ? {
                boxContent: box.tekst,
                boxTitle: box.overskrift,
                id: box.overskrift,
              }
              : box.type === "resultatboks"
                ? {
                  result: box.resultat,
                  title: box.overskrift,
                  intro: box.ingress,
                  selection: box.utvalg,
                  id: box.overskrift,
                  atlasData: atlasData,
                  xlabel: box.karusell.xlabel,
                  ylabel: box.karusell.ylabel,
                }
                : { children: box.tekst };

          const Component: React.FC<typeof props> = json2atlas[box.type];
          /* Husk: endre key til noe mer unikt to linjer under */
          return (
            <Fragment key={index}>
              <Component {...props} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
