module.exports = {
  siteMetadata: {
    title: `Ajaykumar Prathap | Software Engineer`,
    description: `Hi, this is Ajay. Software Engineer, Passionate about Web.`,
    author: `@pajaydev`,
    keywords: `Software Engineer, Javascript, Web developer, Full stack developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176826173-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blogs/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-smartypants`
      ]
    }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`
  ]
}
