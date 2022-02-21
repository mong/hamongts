import { AxisBottom } from "@visx/axis";
import { scaleLinear, scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { schemeSet1 } from "d3-scale-chromatic";

type AbacusData<Data, X extends string, ColorBy extends string | undefined> = {
  [k in X & keyof Data]: number | Date;
} & {
  [k in ColorBy & keyof Data]?: number | string;
} & {
  [k in keyof Data]?: number | string;
};

type AbacusProps<Data, X extends string, ColorBy extends string | undefined> = {
  data: AbacusData<Data, X, ColorBy>[];
  x: X & keyof AbacusData<Data, X, ColorBy>;
  width?: number;
  height?: number;
  margin?: { top: number; bottom: number; right: number; left: number };
  colorLegend?: boolean;
  colorBy?: ColorBy & keyof AbacusData<Data, X, ColorBy>;
  label?: string;
  xMin?: number;
  xMax: number;
  backgroundColor?: string;
  axisLineStroke?: string;
  axisTickStroke?: string;
  axisLineStrokeWidth?: number;
  circleFillDefalt?: string;
  circleRadiusDefalt?: number;
  tickLength?: number;
};

export const Abacus = <Data, X extends string, ColorBy extends string>({
  width = 400,
  height = 60,
  margin = {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20,
  },
  colorLegend = false,
  colorBy,
  data,
  label,
  x,
  xMin = 0,
  xMax,
  backgroundColor = "white",
  axisLineStroke = "blue",
  axisLineStrokeWidth = 2,
  axisTickStroke = "blue",
  circleFillDefalt = "blue",
  circleRadiusDefalt = 10,
  tickLength = 16,
}: AbacusProps<Data, X, ColorBy>) => {
  // color legend missing
  //tooltip missing

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const colorScale = scaleOrdinal({
    domain: data.map((d) => d[colorBy]),
    range: [...schemeSet1],
  });

  const xScale = scaleLinear<number>({
    domain: [xMin, xMax],
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
          tickValues={[xMin, xMax]}
          tickLength={tickLength}
          tickStroke={axisTickStroke}
          tickTransform={`translate(0,-${tickLength / 2})`}
          label={label}
        />
      </Group>
      <Group left={margin.left} top={margin.top}>
        {data.map((d, i) => (
          <circle
            key={`${d[x]}${i}`}
            r={circleRadiusDefalt}
            cx={xScale(d[x])}
            opacity={0.8}
            fill={colorBy ? colorScale(d[colorBy]) : circleFillDefalt}
          />
        ))}
      </Group>
    </svg>
  );
};
