import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

import { Map } from "../src/charts/map";
import Layout from "../src/components/Layout";

const Maps = ({ mapData }) => {
  return (
    <Layout lang="no">
      <div style={{ width: "95%", maxWidth: "1000px", margin: "auto" }}>
        <Map mapAttr={[""]} mapData={mapData} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dataDir = path.join(process.cwd(), "public/data/kronikere.geojson");
  const mapData = JSON.parse(fs.readFileSync(dataDir, "utf-8"));

  return {
    props: {
      mapData,
    },
  };
};

export default Maps;
