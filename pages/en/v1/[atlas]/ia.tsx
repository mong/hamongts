import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";

import Layout from "../../../../src/components/Layout";

interface IAProps {
  atlas: string;
}

const atlasDir = path.join(process.cwd(), "_posts/en/tidligere_atlas");

const AtlasPage: React.FC<IAProps> = ({ atlas }) => {
  return (
    <>
      <Layout lang="en">
        <iframe
          src={`/helseatlas/ia/en/${atlas}/index.html`}
          style={{
            width: "1px",
            minWidth: "100%",
            border: "none",
            borderTop: "2px solid #cddbe8",
            height: "100vh",
          }}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { atlas: context.params.atlas },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(atlasDir)
    .map((Info) => ({ params: { atlas: Info.replace(/.md?$/, "") } }));
  return {
    paths,
    fallback: false,
  };
};

export default AtlasPage;
