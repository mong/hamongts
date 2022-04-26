import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getMDInfo = (dirPath: string) => {
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
    .sort((a, b) => b.frontMatter.num - a.frontMatter.num)
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
