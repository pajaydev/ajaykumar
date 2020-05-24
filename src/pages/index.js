import React from "react"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"
import MainContainer from "../components/container"
import "../styles/global.css"

export default () => (
  <Layout>
    <SideBar />
    <MainContainer />
  </Layout>
)
