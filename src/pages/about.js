import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import blogpost from "../styles/blog-post.module.scss"

const About = (pageQuery) => (
  <Layout>
    <SEO title="About" />
    {console.log(pageQuery)}
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          {pageQuery.data.allContentfulAbout.edges.map((edges) =>
            <div id={blogpost.content__main__centered}>
              <div className={blogpost['image-section']}>
                  <Img resolutions={edges.node.headerImage.resolutions}/>
              </div>
              <h1 style={{
                            paddingTop: '0.8rem',
                            paddingBottom: '0.5rem'
                        }}>
                  {edges.node.title}
                </h1>
                <p id={blogpost.articleText}>
                  <div dangerouslySetInnerHTML={{__html:edges.node.content.childMarkdownRemark.html}} />
                </p>
            </div>  
          )}
        </div>
      </div>
  </Layout>
)

export default About
export const pageQuery = graphql`
    query AboutQuery{
        allContentfulAbout
        {
          edges
          {
            node
            {
              id
              title
              slug
              content {
                childMarkdownRemark {
                          html
                  }
              }
              headerImage {
                resolutions(width: 400) {
                    ...GatsbyContentfulResolutions
                }
              }
          }
        }
      }
    }
`
