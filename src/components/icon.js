import React from "react"

export default ({ link, title, path, name }) => {
  return (
    <a href={link} aria-label={title} target="_blank" rel="noopener noreferrer">
      <svg
        className={"contact-links--" + name}
        version="1.1"
        width="50"
        height="50"
        role="img"
        viewBox="0 0 64 64"
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    </a>
  )
}
