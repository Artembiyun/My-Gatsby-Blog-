import { Link } from "gatsby";
import React, { Component } from "react";
import projectStyles from "../styles/project.module.scss";
import Img from "gatsby-image";
import Scroll from "../components/smoothscroll";

class projects extends Component {
  render() {
    return (
      <div id="projects">
        <div className={projectStyles.title}>
          <h1>My Projects</h1>
          <Scroll to="projects" />
        </div>
        {this.props.projects.allContentfulProjects.edges.map((edges, index) => (
          <Link to={edges.node.slug} key={index}>
            <div className={projectStyles.project}>
              <div
                className={projectStyles.project_image}
                data-aos="fade-bottom"
              >
                <Img sizes={edges.node.image.sizes} style={{ height: "60vh" }}>
                  {" "}
                </Img>
              </div>
              <div className={projectStyles.project_text}>
                <h1 style={{ maxWidth: "600px" }}>{edges.node.title}</h1>
                <h2>{edges.node.subHeading}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default projects;
