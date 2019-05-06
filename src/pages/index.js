import React from 'react'
import Helmet from 'react-helmet';
import SEO from "../components/seo"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Projects from "../components/projects"
import Skills from "../components/skills"
import ContactMe from "../components/contactme"

const IndexPage = (props) => {
    return (
            <Layout indexLayout='true' props={props.data}>
                <SEO title="Web Development"/>
                 <Bio/>
                <Projects projects={props.data}/>
                <Skills/>
                <ContactMe/>
            </Layout>
    )
}

export default IndexPage

// export const pageQuery = graphql`
//     query pageQuery {
//         allContentfulBlog(
//             limit: 6
//             filter: {
//                 node_locale: {eq: "en-US"}
//             },
//             sort: {
//                 fields: [createdAt], order: DESC
//             }
//         ) {
//             edges {
//                 node {
//                     id
//                     title
//                     slug
//                     createdAt(formatString: "MMMM DD, YYYY")
//                     featuredImage {
//                         sizes(maxWidth: 400) {
//                             ...GatsbyContentfulSizes
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

export const ProjectQuery = graphql`
    query ProjectQuery {
        allContentfulProjects{
					edges {
						node{
							id
							title
							content{
								json
							}
							image{
								sizes(maxWidth: 2000){
									...GatsbyContentfulSizes
								}
							}
						}
					}
			}
    }
`