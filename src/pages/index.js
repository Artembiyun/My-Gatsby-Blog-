import React from 'react'
import Helmet from 'react-helmet';

import index from "../styles/index.module.scss"
import Layout from "../components/layout"
import Cards from "../components/cards"

const IndexPage = (props) => {
    return (
            <Layout indexLayout='true'>
                <Helmet>
                    <title>Artem Biyun</title>
                </Helmet>
                {/* <div id={index['intro-card']}>
                    <h1 style={{color:'black'}}>
                        Artem Biyun
                    </h1>
                    <h4 style={{color:'black'}}>Thoughts of an aspiring web developer</h4>
                </div> */}
                <Cards props={props.data}> </Cards>
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
                        resolutions(width: 400) {
                            ...GatsbyContentfulResolutions
                        }
                    }
                }
            }
        }
    }
`