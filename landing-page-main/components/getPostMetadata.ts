import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from './postMetaData';

const getPostMetaData = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), 'app', 'services', 'research', 'allPosts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      link: matterResult.data.link,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetaData;
