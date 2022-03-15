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

export type karusell = {
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

export type ChapterProps = {
  overskrift: string;
  innhold: (Tekst | Faktaboks | Resultatboks)[];
};

type ChaptersProps = {
  innhold: ChapterProps[];
};

const json2atlas = {
  tekst: TextBox,
  faktaboks: FactBox,
  resultatboks: ResultBox,
};

export const Chapters = ({ innhold }: ChaptersProps) => {
  return (
    <>
      {innhold.map((chapter) => (
        <Chapter key={chapter.overskrift} {...chapter} />
      ))}
    </>
  );
};

const Chapter = ({ innhold, overskrift }: ChapterProps) => {
  const mainID = overskrift.toLowerCase().replace(/\s/g, "-");
  return (
    <>
      <h2 id={mainID}>{overskrift}</h2>
      <div>
        {innhold.map((box, index) => {
          const props =
            box.type === "faktaboks"
              ? {
                  boxContent: box.tekst,
                  boxTitle: box.overskrift,
                  id:
                    mainID +
                    "-fact-" +
                    box.overskrift.toLowerCase().replace(/\s/g, "-"),
                }
              : box.type === "resultatboks"
              ? {
                  result: box.resultat,
                  title: box.overskrift,
                  intro: box.ingress,
                  selection: box.utvalg,
                  id:
                    mainID +
                    "_" +
                    box.overskrift.toLowerCase().replace(/\s/g, "-"),
                  carousel: box.karusell,
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
