import { remark } from "remark";
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs';

export async function getMarkdown(){
  const fileName = fs.readFileSync('posts/privacy-policy.md', 'utf8');
  const matterResult = matter(fileName);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...(matterResult.data as {date: string; title: string})
  }
}
