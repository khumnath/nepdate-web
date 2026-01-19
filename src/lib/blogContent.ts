import { BLOG_DATA, Blog } from '../data/blogs';
import { CHADPARBA_DATA } from '../data/static/pageContents';
import BlogImages from '../assets/blogImages';
import { calculateReadTime } from './utils/lib';

export const getAllBlogs = (): Blog[] => {
  // Process static blogs with dynamic read time
  const processedStaticBlogs = BLOG_DATA.map(blog => ({
    ...blog,
    readTime: calculateReadTime(blog.content)
  }));

  const chadparbaBlogs: Blog[] = CHADPARBA_DATA.map((item: any) => {
    // Find first paragraph for excerpt
    const firstPara = item.content.find((c: any) => c.type === 'paragraph');
    // Find first image for thumbnail
    const firstImg = item.content.find((c: any) => c.type === 'image');

    // Construct full content for read time estimate (simple concatenation of text blocks)
    const fullText = item.content
        .filter((c: any) => c.text)
        .map((c: any) => c.text)
        .join(' ');

    return {
      id: item.id,
      title: item.title,
      excerpt: firstPara ? firstPara.text : 'धार्मिक जानकारी...',
      content: '', // Not used in card/list view usually, but might be needed if we pass full object
      image: firstImg ? firstImg.src : BlogImages.nepdateLogo,
      tags: item.tags || [],
      author: 'धर्म/संस्कृति',
      date: 'विशेष', // we might want to format this better based on eventDate if possible later
      readTime: calculateReadTime(fullText),
      eventDate: item.eventDate
    } as Blog;
  });

  return [...processedStaticBlogs, ...chadparbaBlogs];
};
