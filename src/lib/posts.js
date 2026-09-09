import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkSmartypants from "remark-smartypants"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"

const BLOG_DIR = path.join(process.cwd(), "src/blogs")

// YAML turns an unquoted `date:` into a Date, a quoted one into a string.
const toISODate = (value) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : String(value)

function readPosts() {
  return fs
    .readdirSync(BLOG_DIR, { recursive: true })
    .filter((file) => file.endsWith("index.md"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
      )
      return { ...data, date: toISODate(data.date), content }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPosts() {
  return readPosts().map(({ content, ...meta }) => meta)
}

export function getPost(slug) {
  const urlPath = `/blog/${slug.join("/")}`
  return readPosts().find((post) => post.path === urlPath)
}

export async function renderMarkdown(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSmartypants)
    // Posts contain raw <img>/<center>/<code> tags, so keep the HTML through.
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, { theme: "github-light", keepBackground: false })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return String(file)
}

export function getExcerpt(content, length = 160) {
  const text = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > length ? `${text.slice(0, length).trimEnd()}…` : text
}

// Dates are plain `YYYY-MM-DD`, so format them in UTC to avoid shifting a day.
export const formatMonthYear = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })

export const formatFullDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
