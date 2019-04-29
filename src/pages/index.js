import React from 'react'
import Helmet from 'react-helmet';
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = (props) => {
    return (
            <Layout indexLayout='true' props={props.data}>
                <SEO title="Web Development"/>
                <Helmet>
                </Helmet>
            </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(
            limit: 6
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
                        sizes(maxWidth: 400) {
                            ...GatsbyContentfulSizes
                        }
                    }
                }
            }
        }
    }
`