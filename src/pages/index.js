import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import classNames from 'classnames';

import index from "../styles/index.module.scss"
import Layout from "../components/layout"

const BlogPost = ({node}) => {
    return (
        <Link to={node.slug}>
        <div className={classNames({[index['hvr-grow']]: true, [index.articletab]:true})}>
            <h2>{node.title}</h2>
            <h4>{node.createdAt}</h4>
        </div>
        </Link>
    )
}

const IndexPage = (props) => {
    console.log(props)
    return (
            <Layout>
                <div id={index.blogPostsLayout}>
                    {props.data.allContentfulBlog.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
                </div>
            </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(
            filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [createdAt], order: DESC
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    createdAt(formatString: "MMMM DD, YYYY")
                    featuredImage {
                        resolutions(width: 200) {
                            ...GatsbyContentfulResolutions
                        }
                    }
                    content {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`