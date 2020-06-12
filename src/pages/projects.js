import React from "react"
import Card from "../components/card"
import projects from "../data/projects.json";

export default () => {
  return (
    <div className="cards">
      <h2>Recent projects</h2>
      {projects.map((projectData) => {
        return (<Card {...projectData} />)
      })}
    </div>
  )
}
