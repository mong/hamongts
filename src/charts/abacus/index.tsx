import { AxisBottom } from "@visx/axis";
import { scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { max } from "d3-array";
import classNames from "../barcharts/ChartLegend.module.css";
import {
  customFormat,
  customFormatEng,
} from "../../helpers/functions/localFormater";

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
  lang: "en" | "nb" | "nn";
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
  format?: string;
};

export const Abacus = <
  Data,
  X extends string & keyof Data,
  ColorBy extends string & keyof Data
>({
  width = 950,
  height = 100,
  margin = {
    top: 30,
    bottom: 5,
    right: 30,
    left: 30,
  },
  colorLegend = false,
  colorBy,
  data,
  lang,
  label,
  x,
  xMin = 0,
  xMax,
  backgroundColor = "white",
  axisLineStroke = "black",
  axisLineStrokeWidth = 2,
  axisTickStroke = "black",
  circleRadiusDefalt = 20,
  tickLength = 20,
  tickLabelSize = 22,
  labelSize = 22,
  format,
}: AbacusProps<Data, X, ColorBy>) => {
  const figData = data.concat(data.filter((d) => d["bohf"] === "Norge")[0]);
  const values = [...figData.flatMap((dt) => parseFloat(dt[x.toString()]))];
  const xMaxVal = xMax ? xMax : max(values) * 1.1;
  const innerWidth = width - margin.left - margin.right;
  const colors = ["rgba(171, 108, 166, 0.8)", "rgba(120, 45, 135, 0.8)"];

  const valuesLabel = {
    en: "Referral areas",
    nb: "Opptaksområder",
    nn: "Buområda",
  };
  const nationalLabel = { en: "Norway", nb: "Norge", nn: "Noreg" };

  const xScale = scaleLinear<number>({
    domain: [xMin, xMaxVal],
    range: [0, innerWidth],
  });
  return (
    <>
      <svg
        width="100%"
        height={height}
        style={{ backgroundColor, display: "block", margin: "auto" }}
        viewBox={`0 0 ${width} ${height + margin.top}`}
      >
        <Group left={margin.left} top={margin.top}>
          <AxisBottom
            top={0}
            scale={xScale}
            strokeWidth={axisLineStrokeWidth}
            stroke={axisLineStroke}
            numTicks={4}
            tickFormat={(val) =>
              format
                ? lang === "en"
                  ? customFormatEng(format)(val)
                  : customFormat(format)(val)
                : val.toString()
            }
            tickLength={tickLength}
            tickStroke={axisTickStroke}
            tickTransform={`translate(0,-${tickLength / 2})`}
            tickLabelProps={() => ({
              fontSize: tickLabelSize,
              fill: "black",
              textAnchor: "middle",
              y: 50,
            })}
            label={label}
            labelProps={{
              fontSize: labelSize,
              textAnchor: "middle",
              fontWeight: "bold",
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
      <div className={classNames.legendContainer}>
        <ul className={classNames.legendUL}>
          {colors.map((val, i) => (
            <li key={val + i} className={classNames.legendLI}>
              <div className={classNames.legendAnnualVar}>
                <svg width="20px" height="20px">
                  <circle r={7} cx={10} cy={10} fill={val} />
                </svg>
              </div>
              {i === 1 ? nationalLabel[lang] : valuesLabel[lang]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
