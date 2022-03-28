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
  lang: string;
};

export type ChapterProps = {
  overskrift: string;
  innhold: (Tekst | Faktaboks | Resultatboks)[];
  lang: string;
};

type ChaptersProps = {
  innhold: ChapterProps[];
  lang: string;
};

const json2atlas = {
  tekst: TextBox,
  faktaboks: FactBox,
  resultatboks: ResultBox,
};

export const Chapters = ({ innhold, lang }: ChaptersProps) => {
  return (
    <>
      {innhold.map((chapter) => (
        <Chapter {...chapter} key={chapter.overskrift} lang={lang} />
      ))}
    </>
  );
};

const Chapter = ({ innhold, overskrift, lang }: ChapterProps) => {
  const mainID = overskrift.toLowerCase().replace(/\s/g, "-");
  return (
    <div id={mainID} style={{ paddingTop: "10px" }}>
      <h2>{overskrift}</h2>
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
                  lang: lang,
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
    </div>
  );
};
