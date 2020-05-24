import React from "react"
import SideBar from "./sidebar.js"
import "./layout.css"

const Layout = ({ children }) => (
  <div class="wrapper">
    <SideBar />
    <div class="container">{children}</div>
  </div>
)

export default Layout
