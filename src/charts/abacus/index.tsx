import { AxisBottom } from "@visx/axis";
import { scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { max } from "d3-array";

type AbacusData<Data, X extends keyof Data, ColorBy extends keyof Data> = {
  [k in X]: number;
} & {
  [k in ColorBy]?: number | string;
} & {
  [k in keyof Data]?: number | string;
};

type AbacusProps<
  Data,
  X extends string & keyof Data,
  ColorBy extends keyof Data
> = {
  data: AbacusData<Data, X, ColorBy>[];
  x: X;
  width?: number;
  height?: number;
  margin?: { top: number; bottom: number; right: number; left: number };
  colorLegend?: boolean;
  colorBy?: ColorBy;
  label?: string;
  xMin?: number;
  xMax?: number;
  backgroundColor?: string;
  axisLineStroke?: string;
  axisTickStroke?: string;
  axisLineStrokeWidth?: number;
  circleFillDefalt?: string;
  circleRadiusDefalt?: number;
  tickLength?: number;
};

export const Abacus = <
  Data,
  X extends string & keyof Data,
  ColorBy extends string & keyof Data
>({
  width = 400,
  height = 60,
  margin = {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20,
  },
  data,
  label,
  x,
  xMin = 0,
  xMax,
  backgroundColor = "white",
  axisLineStroke = "black",
  axisLineStrokeWidth = 2,
  axisTickStroke = "black",
  circleRadiusDefalt = 15,
  tickLength = 20,
}: AbacusProps<Data, X, ColorBy>) => {
  const figData = data.concat(data.filter((d) => d["bohf"] === "Norge")[0]);
  const values = [...figData.flatMap((dt) => parseFloat(dt[x.toString()]))];
  const xMaxVal = xMax ? xMax : max(values) * 1.1;
  const innerWidth = width - margin.left - margin.right;
  const colors = ["rgba(171, 108, 166, 0.8)", "rgba(191, 206, 214, 0.5)"];

  const xScale = scaleLinear<number>({
    domain: [xMin, xMaxVal],
    range: [0, innerWidth],
  });
  return (
    <svg style={{ backgroundColor }} width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <AxisBottom
          top={0}
          scale={xScale}
          strokeWidth={axisLineStrokeWidth}
          stroke={axisLineStroke}
          numTicks={4}
          tickLength={tickLength}
          tickStroke={axisTickStroke}
          tickTransform={`translate(0,-${tickLength / 2})`}
          label={label}
          labelProps={{
            fontSize: 16,
            textAnchor: "middle",
          }}
        />
      </Group>
      <Group left={margin.left} top={margin.top}>
        {figData.map((d, i) => (
          <circle
            key={`${d[x]}${i}`}
            r={circleRadiusDefalt}
            cx={xScale(d[x])}
            fill={d["bohf"] === "Norge" ? colors[1] : colors[0]}
          />
        ))}
      </Group>
    </svg>
  );
};
