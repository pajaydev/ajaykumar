import Link from "next/link"
import { formatMonthYear } from "@/lib/posts"

export default function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Link key={post.path} className="posts__item" href={`${post.path}/`}>
          <span className="posts__title">{post.title}</span>
          <span className="posts__date">{formatMonthYear(post.date)}</span>
        </Link>
      ))}
    </div>
  )
}
