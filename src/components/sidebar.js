import React from "react"
import Profile from "./profile"
import Contact from "./contacts"
import "./sidebar.css"

const SideBar = () => (
  <section class="sidebar">
    <Profile />
    <Contact />
    <div class="copywright">© All rights reserved.</div>
  </section>
)

export default SideBar
