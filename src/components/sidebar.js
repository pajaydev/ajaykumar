import React from "react"
import Profile from "./profile"
import Contact from "./contacts"
import { Link } from "gatsby"

import "./sidebar.css"

const SideBar = () => (
  <section class="sidebar">
    <Profile />
    <Contact />
    <div class="copywright">© Copyright 2020 Ajaykumar Prathap</div>
  </section>
)

export default SideBar
