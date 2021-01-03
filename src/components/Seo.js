import React from "react"
import { Helmet } from "react-helmet"

export default ({ title, desc, image, keywords }) => {
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
      ]}
    >
      <html lang="en" />
      <link rel="icon" href={image}></link>
      <link
        href="https://fonts.googleapis.com/css?family=Google+Sans:300,400,500"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
