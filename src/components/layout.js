import React from "react"
import { Helmet } from "react-helmet"
import SideBar from "./sidebar.js"
import icon from "../images/icon.png"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Ajaykumar Prathap | Software Engineer"
      meta={[
        {
          name: "description",
          content: "Hi, this is Ajay. Software Engineer, Passionate about Web",
        },
        {
          name: "keywords",
          content:
            "Software Engineer, Javascript, Web developer, Full stack developer",
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

export default Layout
