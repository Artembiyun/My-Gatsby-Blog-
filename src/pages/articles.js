import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import blogpost from "../styles/blog-post.module.scss"

class Blogpage extends Component {

  richtext(richContent){
    //Use JSON.parse on raw input 
    const document = JSON.parse(richContent);

    //Get length of nodes
    const dl = document.content.length;

    //Convert Parsed object into HTML
    let blogPost = documentToHtmlString(document);

    //Loop through 
    for (let i = 0; i < dl; i++){
      if(document.content[i].nodeType === "embedded-asset-block"){
        if(document.content[i].data.target.fields){
          let url = document.content[i].data.target.fields.file['en-US'].url;
          url = url.substring(2);
          blogPost = blogPost.replace('(XXX)', '<img src=https://' + url + '>' + '</img>');
        }
      }
    }
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
                  <div dangerouslySetInnerHTML={{__html:this.richtext(edges.node.richContent.richContent)}} style={{fontWeight:'bold'}} />
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
              richContent
            }
          }
        }
      }
    }`