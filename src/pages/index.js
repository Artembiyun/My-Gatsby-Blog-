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
            <h3>{node.title}</h3>
            <h4>{node.createdAt}</h4>
        </div>
        </Link>
    )
}

const IndexPage = (props) => {
    return (
            <Layout>
                <div id={index['intro-card']}>
                    <h1>
                        ^rtem
                    </h1>
                    <h3>Front-end web development</h3>
                    <h3>   React \ Node \ Angular \ </h3>
                    <h3> Javascript \ Scss \ HTML</h3>
                </div>
                <div id={index['text-bubble']}>
                    <h5>
                        "Hello and welcome to a very strange web development blog"
                    </h5>
                    <div id={index['text-bubble__rounded']}/>
                </div>
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