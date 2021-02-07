import React from "react"
import { Helmet } from "react-helmet"

export default ({ title, desc, keywords, social }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: "title",
          content: title,
        },
        {
          name: "description",
          content: desc,
        },
        {
          name: "keywords",
          content: keywords || "",
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: desc,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: desc,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@ajaykumar__p`,
        },
        {
          name: `twitter:site`,
          content: `@ajaykumar__p`,
        },
      ]}
    >
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Google+Sans:300,400,500"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
