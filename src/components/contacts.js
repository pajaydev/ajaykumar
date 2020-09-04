import React from "react"
import socialData from "../data/social.json"
import Icon from "./icon.js"
import "./contacts.css"

export default () => {
  return (
    <div className="contacts">
      <nav>
        <ul className="contact-links">
          {socialData.map(data => {
            return (
              <li className="contact-links__item">
                <Icon {...data} />
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
