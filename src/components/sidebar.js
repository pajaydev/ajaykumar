import React from "react"
import Profile from "./profile"
import Contact from "./contacts"
import "./sidebar.css"

const SideBar = () => (
  <section className="sidebar">
    <Profile />
    <Contact />
    <div className="copywright">© All rights reserved.</div>
  </section>
)

export default SideBar
