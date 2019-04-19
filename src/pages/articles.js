import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogpost from "../styles/blog-post.module.scss"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let url = node.data.target.fields.file['en-US'].url;
        return <img className={blogpost.centered} src={'https:' + url} width="600px"/>
      }
      },
    }


class Blogpage extends Component {

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
          {this.props.data.allContentfulBlog.edges.map((edges) =>
            <div id={blogpost.content__main__centered}>
              <div className={blogpost.imageBox}>
                <Img sizes={edges.node.featuredImage.sizes}/>
              </div>
                <h2 style={{
                    color: 'black',
                    paddingTop: '0.8rem',
                    paddingBottom: '0.5rem',
                    textAlign:'center'
                  }}>
                  <Link to={this.Bloglink(edges.node.slug)}>{edges.node.title}</Link>
                </h2>
                <p style={{textAlign:'center', fontWeight:'bold'}}>
                  {edges.node.createdAt}
                </p>
                <div className={blogpost.contentBox}> 
                  {documentToReactComponents(edges.node.richContent.json, options)}
                </div>
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
              sizes(maxWidth: 600) {
                  ...GatsbyContentfulSizes
              }
            }
            richContent{
              json
            }
          }
        }
      }
    }`