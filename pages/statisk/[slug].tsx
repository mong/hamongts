import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import Page from "../../src/components/Static";

const CONTENT_DIR = join(process.cwd(), "_posts/statisk");

interface Props {
  content: string;
  frontMatter: {
    title: string;
    lang: string;
  };
}

const Content = ({ content, frontMatter }: Props) => {
  return <Page content={content} frontMatter={frontMatter} />;
};

export default Content;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fullPath = join(CONTENT_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(fullPath);

  const { content, data } = matter(file);

  return {
    props: {
      content,
      frontMatter: {
        ...data,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs.readdirSync(CONTENT_DIR).map((file) => ({
    params: { slug: file.replace(/.md?$/, "") },
  }));

  return { paths, fallback: false };
};
