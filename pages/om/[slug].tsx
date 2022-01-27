import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import Layout from "../../src/components/Layout";
import newsStyles from "../../src/styles/News.module.css";

const CONTENT_DIR = path.join(process.cwd(), "_posts/om");

interface Props {
  frontMatter: any;
  content;
}

const Content = ({ content, frontMatter }: Props) => {
  return (
    <Layout page={frontMatter.title}>
      <div className={newsStyles.container}>
        <div className={newsStyles.article__title}>
          <h2>{frontMatter.title}</h2>
        </div>
        <div className={newsStyles.article}>
          <div className={newsStyles.article__ingress}>
            {frontMatter.ingress}
          </div>
          <div className={newsStyles.article__content}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                details: (object) => {
                  return (
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {object.children[0]}
                      </AccordionSummary>
                      <AccordionDetails>
                        {object.children.filter((_, i) => i !== 0)}
                      </AccordionDetails>
                    </Accordion>
                  );
                },
                summary: (object) => <div>{object.children}</div>,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Content;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fullPath = path.join(CONTENT_DIR, `${params.slug}.md`);
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
