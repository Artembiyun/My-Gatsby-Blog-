import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Layout from "../components/layout"
import blogpost from "../styles/blog-post.module.scss"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

class BlogPost extends Component {
    render() {
        const document = JSON.parse(this.props.data.contentfulBlog.richContent.richContent);
        const blogPost = documentToHtmlString(document);

        const { title, createdAt, featuredImage} = this.props.data.contentfulBlog;
        return (
        <Layout minlayout={true}>
            <div id={blogpost.content}>
                <div id={blogpost.content__main}>
                    <div id={blogpost.content__main__centered}>
                        <div className={blogpost.imageBox}>
                            <Img sizes={featuredImage.sizes}/>
                        </div>
                        <h2 style={{
                            color: 'black',
                            paddingTop: '0.8rem',
                            paddingBottom: '0.5rem',
                            textAlign:'center'
                        }}>
                            {title}
                        </h2>
                        <p style={{textAlign:'center', fontWeight:'bold'}}>
                        {createdAt}</p>
                        <div className={blogpost.contentBox}>
                            <div dangerouslySetInnerHTML={{__html:blogPost}} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        )
    }
}

export default BlogPost
export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            createdAt(formatString: "MMMM DD, YYYY")
            featuredImage {
                sizes(maxWidth: 1000) {
                    ...GatsbyContentfulSizes
                }
            }
            richContent{
                richContent
            }
        }
    }
`