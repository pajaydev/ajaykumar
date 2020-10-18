import React from "react"
import arrow from "../images/arrow.png"
import "./card.css"

export default ({ title, desc, pills, link }) => {
  return (
    <div className="card">
      <h3 className="card__title">
        <a href={link} target="_blank">
          {title}
          <span className="card__arrow">
            <img src={arrow} />
          </span>
        </a>
      </h3>
      <div className="card__desc">{desc}</div>
      <div className="card__pills">
        {pills.map(pill => {
          return <span>{pill}</span>
        })}
      </div>
    </div>
  )
}
