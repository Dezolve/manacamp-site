import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  featured: boolean;
  readingMinutes: number;
  excerpt: string;
};

export type BlogPostPage = BlogPost & {
  contentHtml: string;
};

function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

function getPostFilePath(slug: string) {
  return path.join(postsDirectory, `${slug}.md`);
}

function getAllPostSlugs() {
  ensureDirectory();

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function formatExcerpt(content: string) {
  return content
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function parsePost(slug: string, source: string) {
  const { data, content } = matter(source);
  const frontmatter = data as Partial<PostFrontmatter>;

  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.date ||
    !frontmatter.author ||
    !Array.isArray(frontmatter.tags)
  ) {
    throw new Error(`Post "${slug}" is missing required frontmatter.`);
  }

  const stats = readingTime(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    updated: frontmatter.updated,
    author: frontmatter.author,
    tags: frontmatter.tags,
    featured: frontmatter.featured ?? false,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    excerpt: formatExcerpt(content),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => {
      const source = fs.readFileSync(getPostFilePath(slug), "utf8");
      const post = parsePost(slug, source);

      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        updated: post.updated,
        author: post.author,
        tags: post.tags,
        featured: post.featured,
        readingMinutes: post.readingMinutes,
        excerpt: post.excerpt,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<BlogPostPage | null> {
  const filePath = getPostFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const post = parsePost(slug, source);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(post.content);

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    updated: post.updated,
    author: post.author,
    tags: post.tags,
    featured: post.featured,
    readingMinutes: post.readingMinutes,
    excerpt: post.excerpt,
    contentHtml: processedContent.toString(),
  };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {
      previousPost: null,
      nextPost: null,
    };
  }

  return {
    previousPost: posts[index + 1] ?? null,
    nextPost: posts[index - 1] ?? null,
  };
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
