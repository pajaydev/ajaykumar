import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery,graphql } from 'gatsby'
import get from "lodash/get";
import SideBar from "./sidebar.js"
import icon from "../images/icon.png"
import "./layout.css"

const Layout = ({ children }) => {
  const indexData = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        keywords
      }
    }
  }
  `)
  const title = get(indexData, "site.siteMetadata.title");
  const desc = get(indexData, "site.siteMetadata.description");
  const keywords = get(indexData, "site.siteMetadata.keywords");
  return (
    <div>
    <Helmet
      title={title}
      meta={[
        {
          name: "description",
          content: desc
        },
        {
          name: "keywords",
          content:
            keywords
        },
      ]}
    >
      <html lang="en" />
      <link rel="icon" href={icon}></link>
      <link
        href="https://fonts.googleapis.com/css?family=Google+Sans:300,400,500"
        rel="stylesheet"
      ></link>
    </Helmet>
    <section className="wrapper">
      <SideBar />
      <div className="container">{children}</div>
    </section>
  </div>
  )
}

export default Layout
