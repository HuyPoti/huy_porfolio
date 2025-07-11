import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import rehypeHighlight from "rehype-highlight";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkSlug from "rehype-slug";


const blogDir = path.join(process.cwd(), "src/content/blog")

export function getAllPosts() {
  const filenames = fs.readdirSync(blogDir)

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "")
    const filePath = path.join(blogDir, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
    }
  }).sort((a, b) => (a.date < b.date ? 1 : -1)) // Mới nhất lên đầu
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join("src/content/blog", `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark()
    // .use(remarkToc)
    .use(remarkRehype)
    .use(remarkSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    contentHtml: processed.toString(),
  };
}
