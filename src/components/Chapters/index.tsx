import React, { cloneElement, createElement, Fragment } from "react";
import { TextBox } from "../TextBox";
import { FactBox } from "../Factbox";

const json2atlas = {
  tekst: TextBox,
  faktaboks: FactBox,
  resultatboks: TextBox,
};

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
          const Component = json2atlas[box["type"]];
          console.log(Component);
          
          return <Fragment key={index}>
            <Component {...box} children={box.tekst} boxContent={box.tekst} boxTitle={box.overskrift} />
            </Fragment>;
        })}
      </div>
    </>
  );
};
