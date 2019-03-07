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
                <div className={blogpost['about-box']}>
                  <div className={blogpost['about-box__header-container']}>
                    <Img sizes={edges.node.headerImage.sizes}/>
                  </div>
                  <div className={blogpost['about-box__header-container']}>
                    <h3 style={{color: 'black'}}>
                      E: artembiyun@live.ca                
                    </h3>
                    <h3 style={{color: 'black'}}>
                      P: 416-938-1115                
                    </h3>
                      <div className={blogpost.socmedia}>
                        <a href='https://www.facebook.com/profile.php?id=100008391877805'>
                          <img src={require('../images/icons/fb-icon.svg')}/>
                        </a>
                        <a href='https://www.instagram.com/senior_artyom/'>
                          <img src={require('../images/icons/instagram-icon.svg')}/>
                        </a>
                        <a href='https://www.linkedin.com/in/artembiyun/'>
                          <img src={require('../images/icons/linkedin-icon.svg')} alt="Linkedin Profile"/>
                        </a>
                      </div>
                  </div>
                </div>
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
                sizes(maxWidth: 600) {
                    ...GatsbyContentfulSizes
                }
              }
          }
        }
      }
    }
`
