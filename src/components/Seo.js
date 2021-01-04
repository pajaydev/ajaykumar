import React from "react"
import { Helmet } from "react-helmet"

export default ({ title, desc, keywords, social }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: "description",
          content: desc,
        },
        {
          name: "title",
          content: title,
        },
        {
          name: "keywords",
          content: keywords || "",
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
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: desc,
        }
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
