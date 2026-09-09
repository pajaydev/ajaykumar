import PostList from "@/components/post-list"
import { getPosts } from "@/lib/posts"

export const metadata = { title: "Writing" }

export default function Blog() {
  return (
    <section className="section">
      <h2 className="section__title">Writing</h2>
      <PostList posts={getPosts()} />
    </section>
  )
}
