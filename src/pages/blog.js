import React from "react"
import Layout from "../components/layout"
import get from "lodash/get"
import { graphql, Link } from "gatsby"
import "../styles/blog.scss"

export default ({ data }) => {
  const blogs = get(data, "allMarkdownRemark.group")
  console.log(blogs)
  return (
    <Layout>
      <div className="blogs">
        {blogs.map(blog => {
          console.log(blog)
          let title = get(blog, "edges[0].node.frontmatter.title")
          let date = get(blog, "edges[0].node.frontmatter.date")
          let content = get(blog, "edges[0].node.excerpt")
          console.log(`${get(blog, "edges[0].node.fields.slug")}`)
          return (
            <div className="blog">
              <time className="blog__meta">{date}</time>
              {/* <Link to={`blog${get(blog, "edges[0].node.fields.slug")}`}>
                <h3>{title}</h3>
              </Link> */}
              <a href={`blog${get(blog, "edges[0].node.fields.slug")}`}>
                <h3>{title}</h3>
              </a>
              <span>{content}</span>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      group(field: frontmatter___date) {
        fieldValue
        edges {
          node {
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              title
            }
          }
        }
      }
    }
  }
`
