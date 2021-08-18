import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import { useRouter } from "next/router";
import fs from "fs"
import matter from "gray-matter";

//import { getMDInfo } from "../src/helpers/functions";

const Post = (props) => {
  props.content;
  const router = useRouter();
  const { atlas } = router.query;
  return <p>HelseAtlas: {atlas}</p>;
};
export const getStaticProps: GetStaticProps = async (context) => {



  const getMDInfo = (dirPath: string) => {
    const files = fs.readdirSync(dirPath, "utf-8");
    const info = files
      .filter((fn) => fn.endsWith(".md"))
      .map((fn) => {
        const filePath = path.join(dirPath, fn);
        const rawContent = fs.readFileSync(filePath, {
          encoding: "utf-8",
        });

        const { data } = matter(rawContent);
        const article = fn.replace(/\.md$/, "");
        return {
          article,
          frontMatter: data,
        };
      })
      .sort(
        (a, b) =>
          Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date)
      )
      .map((article) => {
        return {
          ...article,
          frontMatter: {
            ...article.frontMatter,
          },
        };
      });

    return info;
  };


  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      content: "content",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {


  const getMDInfo = (dirPath: string) => {
    const files = fs.readdirSync(dirPath, "utf-8");
    const info = files
      .filter((fn) => fn.endsWith(".md"))
      .map((fn) => {
        const filePath = path.join(dirPath, fn);
        const rawContent = fs.readFileSync(filePath, {
          encoding: "utf-8",
        });

        const { data } = matter(rawContent);
        const article = fn.replace(/\.md$/, "");
        return {
          article,
          frontMatter: data,
        };
      })
      .sort(
        (a, b) =>
          Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date)
      )
      .map((article) => {
        return {
          ...article,
          frontMatter: {
            ...article.frontMatter,
          },
        };
      });

    return info;
  };

  const atlasDir = path.join(process.cwd(), "_posts/atlas");
  const atlasInfo = getMDInfo(atlasDir);
  const paths = atlasInfo.map((Info) => ({ params: { atlas: Info.article } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
