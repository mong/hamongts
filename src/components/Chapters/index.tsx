import React, { Fragment } from "react";
import { TextBox, TextBoxProps } from "../TextBox";
import { FactBox, FactBoxProps } from "../Factbox";

type tekst = {
  type: "tekst";
  tekst: string;
};

type faktaboks = {
  type: "faktaboks";
  overskrift: string;
  tekst: string;
};

type resultatboks = {
  type: "resultatboks";
  overskrift: string;
  ingress: string;
  karusell: string[];
  utvalg: string;
  resultat: string;
};

type ChapterProps = {
  overskrift: string;
  innhold: (tekst | faktaboks | resultatboks)[];
};

type ChaptersProps = {
  innhold: ChapterProps[];
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
  return (
    <>
      <h2>{overskrift}</h2>
      <div>
        {innhold?.map((box, index) => {
          if (box.type === "faktaboks") {
            return (
              <FactBox
                id={box.overskrift}
                boxContent={box.tekst}
                boxTitle={box.overskrift}
              />
            );
          } else if (box.type === "resultatboks") {
            return (
              <FactBox
                id={box.overskrift}
                boxContent={box.resultat}
                boxTitle={box.overskrift}
              />
            );
          } else if (box.type === "tekst") {
            return <TextBox>{box.tekst}</TextBox>;
          }
        })}
      </div>
    </>
  );
};
