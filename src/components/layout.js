import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery,graphql } from 'gatsby'
import get from "lodash/get";
import SideBar from "./sidebar.js";
import SEO from './Seo';
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
      <SEO />
    <section className="wrapper">
      <SideBar title={title} desc={desc} image={icon}/>
      <div className="container">{children}</div>
    </section>
  </div>
  )
}

export default Layout
