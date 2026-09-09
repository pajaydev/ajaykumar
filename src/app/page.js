import Link from "next/link"
import PostList from "@/components/post-list"
import ProjectCard from "@/components/project-card"
import projects from "@/data/projects.json"
import { getPosts } from "@/lib/posts"

export default function Home() {
  const posts = getPosts().slice(0, 5)
  return (
    <>
      <p className="intro">
        I work at <a href="https://www.ebay.com/">eBay</a> as a Full Stack
        Software Engineer. I like fixing web stuff and I spend most of my time
        writing code in Java and JavaScript.
      </p>

      <section className="section">
        <h2 className="section__title">Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Writing</h2>
        <PostList posts={posts} />
        <Link className="more" href="/blog/">
          All writing →
        </Link>
      </section>
    </>
  )
}
