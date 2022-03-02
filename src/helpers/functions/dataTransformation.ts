import { stack } from "d3-shape";

type InputData<D, K extends (string & keyof D)[]> = {
  [k in keyof D & keyof K]: number;
} & {
  [key in keyof D]: number | string;
};

export const toBarchart = <Data, Keys extends (string & keyof Data)[]>(
  data: InputData<Data, Keys>[],
  dataKeys: Keys
) => {
  const stackGen = stack().keys(dataKeys);
  const stackData = stackGen(data).map(
    (d) => (d.forEach((v) => (v["key"] = d.key)), d)
  );

  return stackData;
};
