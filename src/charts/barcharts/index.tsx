import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleOrdinal, scaleBand } from "@visx/scale";
import { Group } from "@visx/group";
import { schemeSet1 } from "d3-scale-chromatic";
import { toBarchart } from "../../helpers/functions/dataTransformation";
import { Series } from "d3-shape";

type BarchartData<
  Data,
  X extends (string & keyof Data)[],
  Y extends keyof Data,
  ColorBy extends keyof Data
> = {
  [k in keyof Data & keyof X]: number;
} & {
  [k in Y]: string;
} & {
  [k in ColorBy]?: number | string;
} & {
  [k in keyof Data]?: number | string;
};

type BarchartProps<
  Data,
  X extends (string & keyof Data)[],
  Y extends string & keyof Data,
  ColorBy extends keyof Data
> = {
  data: BarchartData<Data, X, Y, ColorBy>[];
  x: X;
  y: Y;
  width?: number;
  height?: number;
  margin?: { top: number; bottom: number; right: number; left: number };
  xLabel?: string;
  yLabel?: string;
  xMin?: number;
  xMax: number;
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
};

export const Barchart = <
  Data,
  X extends (string & keyof Data)[],
  Y extends string & keyof Data,
  ColorBy extends string & keyof Data
>({
  width = 400,
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
  yInnerPadding = 0.7,
  yOuterPadding = 0.2,
}: BarchartProps<Data, X, Y, ColorBy>) => {
  //missing
  // color legend
  //tooltip
  //animation

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const series = toBarchart<BarchartData<Data, X, Y, ColorBy>, X>(data, x);

  const colorScale = scaleOrdinal({
    domain: series.map((s) => s.key),
    range: [...schemeSet1],
  });

  const xScale = scaleLinear<number>({
    domain: [xMin, xMax],
    range: [0, innerWidth],
  });

  const yScale = scaleBand<string>({
    domain: data.map((s) => s[y]),
    range: [0, innerHeight],
    paddingInner: yInnerPadding,
    paddingOuter: yOuterPadding,
  });

  return (
    <svg style={{ backgroundColor }} width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <AxisLeft
          top={-5}
          left={6}
          scale={yScale}
          strokeWidth={yAxisLineStrokeWidth}
          stroke={yAxisLineStroke}
          tickValues={data.map((s) => s[y])}
          tickStroke={yAxisTickStroke}
          tickLabelProps={() => ({
            fontSize: 12,
            fill: "#d9d9d9",
          })}
          label={yLabel}
        />
      </Group>
      <Group left={margin.left} top={margin.top + innerHeight}>
        <AxisBottom
          top={0}
          scale={xScale}
          strokeWidth={xAxisLineStrokeWidth}
          stroke={xAxisLineStroke}
          tickValues={[xMin, xMax]}
          tickLength={tickLength}
          tickStroke={xAxisTickStroke}
          tickTransform={`translate(0,0)`}
          label={xLabel}
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
                    stroke={schemeSet1[0]}
                  />
                );
              })}
            </Group>
          );
          return bars;
        })}
      </Group>
    </svg>
  );
};
