import React from "react"
import SideBar from "./sidebar.js"
import "./layout.css"

const Layout = ({ children }) => (
  <section class="wrapper">
    <SideBar />
    <div class="container">{children}</div>
  </section>
)

export default Layout
