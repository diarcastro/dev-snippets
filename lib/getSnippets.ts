import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const getSnippets = async () => {
  const snippets:any[] = [];

  const readDir = async (dir:string) => {
    const files = fs.readdirSync(path.join(dir));
    if (files.length) {
      for(let fileName of files) {
        const filePath = path.join(dir, fileName);
        const stats = fs.lstatSync(filePath);
        if (stats.isDirectory()) {
          await readDir(filePath);
        } else {
          const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')
          const { data: frontMatter, content } = matter(markdownWithMeta);
          const mdxSource = await serialize(content);

          snippets.push({
            frontMatter,
            mdxSource,
            slug: filePath,
          });
        }
      }
    }
  };
  await readDir(path.join('snippets'));

  return snippets;
};

export default getSnippets;
