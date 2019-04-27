import React from 'react'
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import Projects from "../pages/projects-page"

const IndexPage = (props) => {
    return (
            <Layout indexLayout='true' props={props.data}>
                <Helmet>
                    <title>Artem Biyun</title>
                </Helmet>
            </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(
            limit: 3
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