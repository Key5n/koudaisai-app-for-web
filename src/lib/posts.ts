import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";

export async function getContent(filename: string) {
  const fileName = fs.readFileSync(`posts/${filename}.md`, "utf-8");
  const matterResult = matter(fileName);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkToc, {
      heading: "目次",
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
