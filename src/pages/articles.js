import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import blogpost from "../styles/blog-post.module.scss"

class Blogpage extends Component {
  richtext(richContent){
    const document = JSON.parse(richContent);
    const blogPost = documentToHtmlString(document);
    return blogPost;
  }

  Bloglink(link){
    let linkText = '/' + link;
    return linkText;
  }

  render() {
  return(
    <Layout>
      <SEO title="Blog" />
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
        {console.log(this.props.data.allContentfulBlog.edges)}
          {this.props.data.allContentfulBlog.edges.map((edges) =>
            <div id={blogpost.content__main__centered}>
              <Img sizes={edges.node.featuredImage.sizes}/>
              <h2 style={{
              color: 'black',
              paddingTop: '0.8rem',
              paddingBottom: '0.5rem'
              }}>
                <Link to={this.Bloglink(edges.node.slug)}>{edges.node.title}</Link>
              </h2>
              <p>
                {edges.node.createdAt}
              </p>
                <div dangerouslySetInnerHTML={{__html:this.richtext(edges.node.richContent.richContent)}} />
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
      allContentfulBlog
      (
        sort:{
          fields:[createdAt]
          order: DESC
        }
      ) 
      {
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
              richContent{
                richContent
            }
          }
        }
      }
    }`
