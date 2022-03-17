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
  tickLabelSize?: number;
  labelSize?: number;
  markerOpacity?: number;
};

export const Abacus = <
  Data,
  X extends string & keyof Data,
  ColorBy extends string & keyof Data
>({
  width = 800,
  height = 80,
  margin = {
    top: 20,
    bottom: 5,
    right: 30,
    left: 30,
  },
  colorLegend = false,
  colorBy,
  data,
  label,
  x,
  xMin = 0,
  xMax,
  backgroundColor = "white",
  axisLineStroke = "black",
  axisLineStrokeWidth = 8,
  axisTickStroke = "black",
  circleRadiusDefalt = 25,
  tickLength = 30,
  tickLabelSize = 20,
  labelSize = 20,
  markerOpacity = 0.8,
}: AbacusProps<Data, X, ColorBy>) => {
  //color legend missing
  //tooltip missing

  const figData = data.concat(data.filter((d) => d["bohf"] === "Norge")[0]);
  const values = [...figData.flatMap((dt) => parseFloat(dt[x.toString()]))];
  const xMaxVal = xMax ? xMax : max(values) * 1.1;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const colors = ["#6CACE4", "#003087"];

  const xScale = scaleLinear<number>({
    domain: [xMin, xMaxVal],
    range: [0, innerWidth],
  });
  return (
    <svg
      width="100%"
      height={height}
      style={{ backgroundColor }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group left={margin.left} top={margin.top}>
        <AxisBottom
          top={0}
          scale={xScale}
          strokeWidth={axisLineStrokeWidth}
          stroke={axisLineStroke}
          tickValues={[xMin, xMaxVal]}
          tickLength={tickLength}
          tickStroke={axisTickStroke}
          tickTransform={`translate(0,-${tickLength / 2})`}
          label={label}
          tickLabelProps={() => ({
            fontSize: tickLabelSize,
            fill: "black",
            textAnchor: "middle",
          })}
          labelProps={{
            fontSize: labelSize,
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
            opacity={markerOpacity}
            fill={d["bohf"] === "Norge" ? colors[1] : colors[0]}
            stroke={d["bohf"] === "Norge" ? "black" : "grey"}
          />
        ))}
      </Group>
    </svg>
  );
};
