import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Layout from "../components/layout"
import blogpost from "../styles/blog-post.module.scss"
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class BlogPost extends Component {
    render() {
        // const document = JSON.parse(this.props.data.contentfulBlog.richContent.richContent);
        // console.log(documentToReactComponents(document));
        // console.log(document)

        const { title, createdAt, featuredImage, content } = this.props.data.contentfulBlog;
        return (
        <Layout minlayout={true}>
            <div id={blogpost.content}>
                <div id={blogpost.content__main}>
                    <div id={blogpost.content__main__centered}>
                        <Img sizes={featuredImage.sizes}/>
                        <h1 style={{
                            paddingTop: '0.8rem',
                            paddingBottom: '0.5rem'
                        }}>
                            {title}
                        </h1>
                        <p>{createdAt}</p>
                        <p id={blogpost.articleText}>
                            <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
                            <div dangerouslySetInnerHTML={{__html:document}} />
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
            richContent{
                richContent
            }
        }
    }
`