import React from "react"
import socialData from "../data/social.json";
import Icon from "./icon.js";
import './contacts.css';

export default () => {
  return (
    <div class="contacts">
      <nav>
        <ul class="contact-links">
          {socialData.map((data) => {
            return (<li class="contact-links__item"><Icon {...data} /></li>)
          })}
        </ul>
      </nav>
    </div>
  )
}
