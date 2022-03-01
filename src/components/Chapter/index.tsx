import React from "react";
import { TextBox } from "../TextBox";
import { FactBox } from "../Factbox";

const json2atlas = {
  tekst: TextBox,
  faktaboks: FactBox,
  resultatboks: TextBox,
};

type tekst = {
  type: "tekst",
  tekst: string
}

type faktaboks = {
  type: "faktaboks",
  overskrift: string,
  tekst: string
}

type resultatboks = {
  type: "resultatboks",
  overskrift: string,
  ingress: string,
  karusell: string[],
  utvalg: string,
  resultat: string
}

type ChapterProps = {
    overskrift: string,
    innhold: (tekst|faktaboks|resultatboks)[]
};

export const Chapter = ({ overskrift, innhold }: ChapterProps) => {
  return(<><h2>{overskrift}</h2><div>{innhold.map((box) => {
    return(<> <json2atlas[{box["type"]}] /> </>)
  })}</div></>);
};
