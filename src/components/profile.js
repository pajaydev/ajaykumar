import React from "react"
import { Link } from "gatsby"
import profile from "../images/profile.jpg"
import "./profile.css"

export default () => {
  return (
    <div className="profile">
      <Link to="/">
        <img id="avatar" src={profile} />
      </Link>
      <div className="profile__title">
        <h1>
          <Link className="title" to="/">
            Ajaykumar Prathap
          </Link>
        </h1>
      </div>
      <div className="profile__desc">San Jose, California</div>
      <nav>
        <ul>
          <li>
            <Link
              className="nav-item"
              activeClassName="nav-active-item"
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" activeClassName="nav-active-item" to="/">
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="nav-active-item"
              to="/blog/"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
