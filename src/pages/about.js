import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import blogpost from "../styles/blog-post.module.scss"

const About = (pageQuery) => (
  <Layout>
    <SEO title="About" />
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          {pageQuery.data.allContentfulAbout.edges.map((edges) =>
            <div id={blogpost.about}>
                <div className={blogpost['about-box']}>
                    <Img sizes={edges.node.headerImage.sizes} style={{width:'300px', borderRadius: '200px'}}/>
                  <div className={blogpost['about-box__header-container']}>
                    <h3 style={{color: 'black'}}>
                      E: artembiyun@live.ca                
                    </h3>
                    <h3 style={{color: 'black'}}>
                      P: 416-938-1115                
                    </h3>
                      <div className={blogpost.socmedia}>
                        <a href='https://www.facebook.com/profile.php?id=100008391877805'>
                          <img src={require('../images/icons/fb-icon.svg')} alt="FaceBook Icon"/>
                        </a>
                        <a href='https://www.instagram.com/artembiyun/'>
                          <img src={require('../images/icons/instagram-icon.svg')} alt="Instagram Icon"/>
                        </a>
                        <a href='https://www.linkedin.com/in/artembiyun/'>
                          <img src={require('../images/icons/linkedin-icon.svg')} alt="Linkedin Profile"/>
                        </a>
                      </div>
                  </div>
                </div>
                <div>
              <h2 style={{  textAlign:'center',
                            color: 'black',
                            paddingTop: '0.8rem',
                            paddingBottom: '0.5rem'
                        }}>
                  {edges.node.title}
                </h2>
                  <div dangerouslySetInnerHTML={{__html:edges.node.content.childMarkdownRemark.html}}
                    style={{
                      textAlign: 'center',
                      padding: '15px 30px 20px 30px',
                      fontWeight: '500',
                      fontSize: '26px'
                    }}
                  />
                </div>
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
                sizes(maxWidth: 400) {
                    ...GatsbyContentfulSizes
                }
              }
          }
        }
      }
    }
`
