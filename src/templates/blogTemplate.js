import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/Seo"
import "./blogPost.scss"

export default blogData => {
  const { html, frontmatter } = blogData.data.markdownRemark
  const title = frontmatter.title
  const keywords = frontmatter.keywords
  console.log(blogData.data)
  return (
    <div>
      <SEO title={title} keywords={keywords} />
      <section class="wrapper">
        <div className="header">
          <Link to="/blog">👈 Back</Link>
        </div>
        <div className="container">
          <div className="blogpost">
            <h1 className="blogpost__title">{frontmatter.title}</h1>
            <p className="blogpost__date">
              <span role="img" aria-label="date">
                🕑
              </span>
              {frontmatter.date}
            </p>
            <time>{frontmatter.time}</time>
            <div
              className="blogpost__content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
