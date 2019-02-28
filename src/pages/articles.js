import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import blogpost from "../styles/blog-post.module.scss"

class Blogpage extends Component {
  render() {
    console.log(this.props)
  return(
    <Layout>
      <SEO title="Blog" />
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          {this.props.data.allContentfulBlog.edges.map((edges) =>
            <div id={blogpost.content__main__centered}>
              <div className={blogpost['image-section']}>
                   <div className={blogpost['image-section__holder']}>
                     <Img resolutions={edges.node.featuredImage.resolutions}/>
              </div>
              </div>
              <h1>
                <Link to={edges.node.slug} className={blogpost.blacktext}>{edges.node.title}</Link>
              </h1>
              <p id={blogpost.articleText}>
              <div dangerouslySetInnerHTML={{__html:edges.node.content.childMarkdownRemark.html}} />
              </p>
            <hr/>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
  }
}

export default Blogpage

export const ArticlesQuery = graphql`
  query ArticlesQuery{
      allContentfulBlog {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              resolutions(width: 600) {
                  ...GatsbyContentfulResolutions
              }
            }
              content {
                childMarkdownRemark {
                    html
                }
            }
          }
        }
      }
    }`
