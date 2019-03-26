import React from 'react'
import Helmet from 'react-helmet';

import index from "../styles/index.module.scss"
import Paralax1 from "./paralax1"
import Paralax2 from "./paralax2"
import Paralax3 from "./paralax3"
import Layout from "../components/layout"

const IndexPage = (props) => {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>Artem Biyun</title>
                </Helmet>
                <div id={index['intro-card']}>
                    <h1 style={{color:'black'}}>
                        Artem Biyun
                    </h1>
                    <h4 style={{color:'black'}}>Fun on the front-end</h4>
                    <h4 style={{color:'black'}}>Buisness on the back-end</h4>
                </div>
            </Layout>
            <Paralax1/>
            <Paralax2/>
            <Paralax3/>
        </div>
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
                }
            }
        }
    }
`