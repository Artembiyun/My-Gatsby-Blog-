import React, { Component } from "react";
import Layout from "../components/layout";
import projects from "../styles/projects.module.scss";
import Img from "gatsby-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class Projects extends Component {
  render() {
    return (
      <Layout minlayout={true}>
        <div className={projects.canvas}>
          <div className={projects["cards-holder"]}>
					{this.props.data.allContentfulProjects.edges.map(edges => (
						<div className={projects["cards-holder__card"] + " " + projects["hvr-grow"]} key={edges.node.id}>
							<Img sizes={edges.node.image.sizes} style={{height: '300px'}}/>
							<h2 style={{fontWeight:'bold'}}>{edges.node.title}</h2>
							{documentToReactComponents(edges.node.content.json)}
						</div>
					))}
					</div>
        </div>
      </Layout>
    );
  }
}

export default Projects;

export const ProjectsQuery = graphql`
    query ProjectsQuery {
        allContentfulProjects{
					edges {
						node{
							id
							title
							content{
								json
							}
							image{
								sizes(maxWidth: 450){
									...GatsbyContentfulSizes
								}
							}
						}
					}
			}
    }
`