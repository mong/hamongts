import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import { useRouter } from "next/router";
import { getMDInfo } from "../src/helpers/functions/markdownHelpers";

const Post = (props) => {
  props.content;
  const router = useRouter();
  const { atlas } = router.query;
  return <p>HelseAtlas: {atlas}</p>;
};
export const getStaticProps: GetStaticProps = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      content: "content",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);
  const paths = atlasInfo.map((Info) => ({ params: { atlas: Info.article } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
