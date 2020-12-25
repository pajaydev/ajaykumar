import React from 'react';
import { graphql} from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/layout'
import './blog.css';

export default (blogData) => {
    const {html, frontmatter} = blogData.data.markdownRemark;
    
    return(
        <Layout>
            <Header />
            <section className="wrapper">
                <div className="blog">
    <h1 className="blog__title">{frontmatter.title}</h1>
    <time>{frontmatter.time}</time>
                <div className="blog__content" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </section>
        </Layout>
        
    )
}

export const blogQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;