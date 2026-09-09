import Link from "next/link"
import { notFound } from "next/navigation"
import {
  formatFullDate,
  getExcerpt,
  getPost,
  getPosts,
  renderMarkdown,
} from "@/lib/posts"

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.path.replace("/blog/", "").split("/"),
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const description = getExcerpt(post.content)
  return {
    title: post.title,
    description,
    openGraph: { type: "article", title: post.title, description },
  }
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const html = await renderMarkdown(post.content)
  return (
    <article>
      <Link className="back" href="/blog/">
        ← Writing
      </Link>
      <h1 className="post__title">{post.title}</h1>
      <p className="post__date">{formatFullDate(post.date)}</p>
      <div className="article" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
