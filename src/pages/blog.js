import React from "react"
import Layout from "../components/layout"
import get from "lodash/get"
import { graphql, Link } from "gatsby"
import "../styles/blog.scss"

export default ({ data }) => {
  const blogs = get(data, "allMarkdownRemark.nodes")
  return (
    <Layout>
      <div className="blogs">
        {blogs.map(blog => {
          let title = get(blog, "frontmatter.title")
          let date = get(blog, "frontmatter.date")
          return (
            <div className="blog">
              <time className="blog__meta">{date}</time>
              {/* <Link to={`blog${get(blog, "edges[0].node.fields.slug")}`}>
                <h3>{title}</h3>
              </Link> */}
              <a href={`blog${get(blog, "fields.slug")}`}>
                <h3>{title}</h3>
              </a>
              <span>{blog.excerpt}</span>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
query blogQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
}
`
