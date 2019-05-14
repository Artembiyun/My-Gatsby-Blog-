import React, { Component } from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Projects from "../components/projects"
import Skills from "../components/skills"
import ContactMe from "../components/contactme"

import "aos/dist/aos.css";

class IndexPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init({
      duration: 800,
      offset: 60,
      disable: 'mobile'
    });
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render(){
    return (
            <Layout indexLayout='true' props={this.props.data}>
                <SEO title="Web Development"/>
                <Bio/>
                <Projects projects={this.props.data}/>
                <Skills/>
                <ContactMe/>
            </Layout>
    );
  }
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
        allContentfulProjects(sort: { fields: [index], order: ASC })
        {
					edges {
						node{
							id
              title
              gitHub
              slug
              subHeading
              index
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