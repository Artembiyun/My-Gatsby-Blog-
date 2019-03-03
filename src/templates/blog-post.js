import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Layout from "../components/layout"
import blogpost from "../styles/blog-post.module.scss"

class BlogPost extends Component {
    render() {
        const { title, createdAt, featuredImage, content } = this.props.data.contentfulBlog
        return (
        <Layout minlayout={true}>
            <div id={blogpost.content}>
                <div id={blogpost.content__main}>
                <div id={blogpost.content__main__centered}>
                <div className={blogpost['image-section']}>
                   <div className={blogpost['image-section__holder']}>
                        <Img sizes={featuredImage.sizes}/>
                   </div>
                </div>
                <h1 style={{
                    paddingTop: '0.8rem',
                    paddingBottom: '0.5rem'
                }}>
                    {title}
                </h1>
                <p>{createdAt}</p>
                <p id={blogpost.articleText}>
                <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
                </p>
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
`