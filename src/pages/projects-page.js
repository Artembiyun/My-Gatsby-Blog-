import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import projects from "../styles/projects.module.scss";
import Img from "gatsby-image";
import ReactGA from "react-ga";

class Projects extends Component {
  projectsLink(link) {
    let linkText = "/" + link;
    return linkText;
  }

  render() {
    return (
      <Layout minlayout={true}>
        {ReactGA.pageview("/projects")}
        <SEO title="Projects" />
        <div className={projects.canvas}>
          <div className={projects["cards-holder"]}>
            {this.props.data.allContentfulProjects.edges.map(edges => (
              <Link to={this.projectsLink(edges.node.slug)}>
                <div
                  className={
                    projects["cards-holder__card"] + " " + projects["hvr-grow"]
                  }
                  key={edges.node.id}
                >
                  <Img
                    sizes={edges.node.image.sizes}
                    style={{ height: "500px", width: "250px" }}
                  />
                </div>
                <div className={projects.description}>
                  <h1>{edges.node.title}</h1>
                  <h2>{edges.node.subHeading}</h2>
                </div>
              </Link>
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
    allContentfulProjects(sort: { fields: [index], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          subHeading
          content {
            json
          }
          image {
            sizes(maxWidth: 450) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
