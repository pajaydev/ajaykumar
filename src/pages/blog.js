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
          let path = `${get(blog, "frontmatter.path")}`
          return (
            <div className="blog">
              <time className="blog__meta">{date}</time>
              <Link to={path}>
                <h3>{title}</h3>
              </Link>
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
          path
        }
      }
    }
  }
`
