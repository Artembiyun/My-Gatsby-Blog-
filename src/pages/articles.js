import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import blogpost from "../styles/blog-post.module.scss"

class Blogpage extends Component {
  render() {
  return(
    <Layout>
      <SEO title="Blog" />
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          {this.props.data.allContentfulBlog.edges.map((edges) =>
            <div id={blogpost.content__main__centered}>
              <Img sizes={edges.node.featuredImage.sizes}/>
              <h1>
                <Link to={edges.node.slug} className={blogpost.blacktext}>{edges.node.title}</Link>
              </h1>
              <p>
                {edges.node.createdAt}
              </p>
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
            createdAt(formatString: "MMMM DD, YYYY")
            featuredImage {
              sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes
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
