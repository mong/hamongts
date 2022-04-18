import { geoMercator, geoPath } from "d3-geo";
import { scaleThreshold } from "d3-scale";

type FeatureShape = {
  type: "Feature";
  id: string;
  geometry: {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
  };
  properties: {
    OBJECTID_1: number;
    BoHF_num: number;
    OBJECTID: number;
    Shape_Leng: number;
    Shape_Le_1: number;
    Shape_Area: number;
  };
};

type MapData = {
  type: "FeatureCollection";
  features: FeatureShape[];
};

type MapProps = {
  mapData: MapData;
  mapAttr?: any[];
  dataToMap?: any[];
  connection?: any;
  classes?: number[];
  color?: string[];
};

const ObjectIDToBoHF = [
  { BoHF_num: 1, bohf: "Finnmark" },
  { BoHF_num: 2, bohf: "UNN" },
  { BoHF_num: 3, bohf: "Nordland" },
  { BoHF_num: 4, bohf: "Helgeland" },
  { BoHF_num: 6, bohf: "Nord-Trøndelag" },
  { BoHF_num: 7, bohf: "St. Olav" },
  { BoHF_num: 8, bohf: "Møre og Romsdal" },
  { BoHF_num: 10, bohf: "Førde" },
  { BoHF_num: 11, bohf: "Bergen" },
  { BoHF_num: 12, bohf: "Fønna" },
  { BoHF_num: 13, bohf: "Stavanger" },
  { BoHF_num: 14, bohf: "Østfold" },
  { BoHF_num: 15, bohf: "Akershus" },
  { BoHF_num: 16, bohf: "OUS" },
  { BoHF_num: 17, bohf: "Lovisenberg" },
  { BoHF_num: 18, bohf: "Diakonhjemmet" },
  { BoHF_num: 19, bohf: "Innlandet" },
  { BoHF_num: 20, bohf: "Vestre Viken" },
  { BoHF_num: 21, bohf: "Vestfold" },
  { BoHF_num: 22, bohf: "Telemark" },
  { BoHF_num: 23, bohf: "Sørlandet" },
];

export const Map: React.FC<MapProps> = ({
  mapData,
  mapAttr,
  dataToMap,
  connection,
  classes,
  color,
}) => {
  const width = 1000;
  const height = 1000;

  const initCenter = geoPath().centroid(mapData);
  const initOffset: [number, number] = [width / 2, height / 2 - height * 0.11];
  const initScale = 150;
  const initialProjection = geoMercator()
    .scale(initScale)
    .center(initCenter)
    .translate(initOffset);
  const initPath = geoPath().projection(initialProjection);

  const bounds = initPath.bounds(mapData);
  console.log(bounds);
  const hscale = (initScale * width) / (bounds[1][0] - bounds[0][0]);
  const vscale = (initScale * height) / (bounds[1][1] - bounds[0][1]);
  const scale = hscale < vscale ? 0.98 * hscale : 0.98 * vscale;
  const offset: [number, number] = [
    width - (bounds[0][0] + bounds[1][0]) / 2,
    height - (bounds[0][1] + bounds[1][1]) / 2,
  ];

  const colorScale = scaleThreshold<number, string>()
    .domain(classes)
    .range(color);

  const colors = [
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
    "rgba(135, 24, 157, 0.2)",
    "rgba(135, 24, 157, 0.8)",
    "rgba(135, 24, 157, 0.6)",
    "rgba(135, 24, 157, 0.4)",
  ];

  const projection = geoMercator()
    .scale(scale)
    .center(initCenter)
    .translate(offset);
  const pathGenerator = geoPath().projection(projection);

  return (
    <div style={{ width: "90%", height: "100%", margin: "auto" }}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor: "none" }}
      >
        <rect width={width} height={height} stroke={"black"} fill={"none"} />
        {mapData.features.map((d, i) => {
          return (
            <path
              key={`map-feature-${i}`}
              d={pathGenerator(d.geometry)}
              fill={d.properties.BoHF_num === 23 ? colors[i] : "none"}
              stroke={"black"}
              strokeWidth={0.4}
              className={i + ""}
            />
          );
        })}
      </svg>
    </div>
  );
};
