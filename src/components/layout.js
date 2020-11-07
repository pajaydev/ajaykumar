import React from "react"
import { Helmet } from "react-helmet"
import SideBar from "./sidebar.js"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Ajaykumar Prathap | Software Engineer"
      meta={[
        { name: "description", content: "My Personal website" },
        {
          name: "keywords",
          content: "software, Javascript, web, Ajaykumar, Ajay, full-stack",
        },
      ]}
    >
      <html lang="en" />
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

export default Layout
