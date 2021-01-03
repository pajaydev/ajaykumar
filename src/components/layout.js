import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"
import SideBar from "./sidebar.js"
import SEO from "./Seo"
import "./layout.css"

const Layout = ({ children }) => {
  const indexData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)
  const title = get(indexData, "site.siteMetadata.title")
  const desc = get(indexData, "site.siteMetadata.description")
  const keywords = get(indexData, "site.siteMetadata.keywords")
  return (
    <div>
      <SEO title={title} desc={desc} keywords={keywords} />
      <section className="wrapper">
        <SideBar />
        <div className="container">{children}</div>
      </section>
    </div>
  )
}

export default Layout
