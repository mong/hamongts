import React from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleOrdinal, scaleBand } from "@visx/scale";
import { Group } from "@visx/group";
import { max, sum } from "d3-array";

import { toBarchart } from "../../helpers/functions/dataTransformation";
import { AnnualVariation } from "./AnnualVariation";

export type BarchartData<
  Data,
  X extends (string & keyof Data)[],
  Y extends keyof Data,
  ColorBy extends keyof Data,
  AnnualVar extends (keyof Data)[]
> = {
  [k in keyof Data & keyof X]: number;
} & {
  [k in Y]: string;
} & {
  [k in ColorBy]?: number | string;
} & {
  [k in keyof Data]?: number | string;
} & {
  [k in keyof Data & keyof AnnualVar]?: number;
};

type BarchartProps<
  Data,
  X extends (string & keyof Data)[],
  Y extends string & keyof Data,
  ColorBy extends keyof Data,
  AnnualVar extends (string & keyof Data)[]
> = {
  data: BarchartData<Data, X, Y, ColorBy, AnnualVar>[];
  x: X;
  y: Y;
  width?: number;
  height?: number;
  margin?: { top: number; bottom: number; right: number; left: number };
  xLabel?: string;
  yLabel?: string;
  xMin?: number;
  xMax?: number;
  backgroundColor?: string;
  xAxisLineStroke?: string;
  xAxisTickStroke?: string;
  xAxisLineStrokeWidth?: number;
  yAxisLineStroke?: string;
  yAxisTickStroke?: string;
  yAxisLineStrokeWidth?: number;
  tickLength?: number;
  yInnerPadding?: number;
  yOuterPadding?: number;
  annualVar?: AnnualVar;
  annualVarLabels?: number[];
};

export const Barchart = <
  Data,
  X extends (string & keyof Data)[],
  Y extends string & keyof Data,
  ColorBy extends string & keyof Data,
  AnnualVar extends (string & keyof Data)[]
>({
  width = 600,
  height = 500,
  margin = {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20,
  },
  data,
  xLabel,
  yLabel,
  x,
  y,
  xMin = 0,
  xMax,
  backgroundColor = "white",
  xAxisLineStroke = "black",
  xAxisLineStrokeWidth = 2,
  xAxisTickStroke = "black",
  yAxisLineStroke = "black",
  yAxisLineStrokeWidth = 0,
  yAxisTickStroke = "white",
  tickLength = 3,
  yInnerPadding = 0.3,
  yOuterPadding = 0.2,
  annualVar,
  annualVarLabels,
}: BarchartProps<Data, X, Y, ColorBy, AnnualVar>) => {
  //missing
  // color legend
  //tooltip
  //animation
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const sorted = [...data].sort((first, second) => {
    const firstVal = sum(x.map((xVal) => parseFloat(first[xVal])));
    const secondVal = sum(x.map((xVal) => parseFloat(second[xVal])));
    return secondVal - firstVal;
  });

  const series = toBarchart<BarchartData<Data, X, Y, ColorBy, AnnualVar>, X>(
    sorted,
    x
  );

  //used to find max values
  const annualValues = annualVar
    ? annualVar.flatMap((annual) => data.flatMap((dt) => parseInt(dt[annual])))
    : [];
  const values = [...annualValues, ...series.flat().flat().flat()];
  const xMaxValue = xMax ? xMax : max(values) * 1.1;
  const colors = ["#6CACE4", "#003087"];
  const colorScale = scaleOrdinal({
    domain: series.map((s) => s.key),
    range: [...colors],
  });

  const xScale = scaleLinear<number>({
    domain: [xMin, xMaxValue],
    range: [0, innerWidth],
  });

  const yScale = scaleBand<string>({
    domain: sorted.map((s) => s[y]),
    range: [0, innerHeight],
    paddingInner: yInnerPadding,
    paddingOuter: yOuterPadding,
  });

  return (
    <div style={{ margin: "auto" }}>
      <svg style={{ backgroundColor }} width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <AxisLeft
            top={5}
            left={-10}
            scale={yScale}
            strokeWidth={yAxisLineStrokeWidth}
            stroke={yAxisLineStroke}
            tickValues={data.map((s) => s[y])}
            tickStroke={yAxisTickStroke}
            tickLabelProps={() => ({
              fontSize: 14,
              fill: "black",
              textAnchor: "end",
            })}
            label={yLabel}
            labelProps={{
              fontSize: 20,
              x: -80,
              y: -15,
              transform: "(rotateX(90deg))",
            }}
          />
        </Group>
        <Group left={margin.left} top={margin.top + innerHeight}>
          <AxisBottom
            top={0}
            scale={xScale}
            strokeWidth={xAxisLineStrokeWidth}
            stroke={xAxisLineStroke}
            numTicks={4}
            tickLength={tickLength}
            tickStroke={xAxisTickStroke}
            tickTransform={`translate(0,0)`}
            label={xLabel}
            labelProps={{
              fontSize: 15,
              x: 50,
              y: 30,
            }}
          />
        </Group>
        <Group left={margin.left} top={margin.top}>
          {series.map((d, i) => {
            const bars = (
              <Group fill={colorScale(d["key"])} key={`${i}`}>
                {d.map((barData, i) => {
                  return (
                    <rect
                      key={`${i}`}
                      x={xScale(barData[0])}
                      y={yScale(barData.data[y].toString())}
                      width={xScale(Math.abs(barData[0] - barData[1]))}
                      height={yScale.bandwidth()}
                      fill={
                        barData.data["bohf"].toString() === "Norge"
                          ? colors[1]
                          : colors[0]
                      }
                      strokeWidth={1}
                    />
                  );
                })}
              </Group>
            );
            return bars;
          })}
          {annualVar &&
            data.map((d, i) => {
              return (
                <AnnualVariation
                  data={d}
                  xScale={xScale}
                  yScale={yScale}
                  annualVar={annualVar}
                  y={y}
                  labels={annualVarLabels}
                  key={`${d["bohf"]}${i}`}
                />
              );
            })}
        </Group>
      </svg>
    </div>
  );
};
