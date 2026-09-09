import Link from "next/link"
import PostList from "@/components/post-list"
import ProjectCard from "@/components/project-card"
import ProjectRow from "@/components/project-row"
import projects from "@/data/projects.json"
import { getPosts } from "@/lib/posts"

const GITHUB_URL = "https://github.com/pajaydev"

export default function Home() {
  const posts = getPosts().slice(0, 5)
  return (
    <>
      <p className="intro">
        I&rsquo;m a full-stack engineer at{" "}
        <a href="https://aws.amazon.com/">AWS</a>. I like building things that
        people actually use.
      </p>

      <section className="section">
        <h2 className="section__title">Projects</h2>
        <div className="projects">
          {projects.featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="rows">
          {projects.more.map((project) => (
            <ProjectRow key={project.title} {...project} />
          ))}
        </div>
        <a
          className="more"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub →
        </a>
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
