import { Link } from "gatsby";
import React, { Component } from 'react';
import projectStyles from "../styles/project.module.scss"
import Img from "gatsby-image";


class projects extends Component {
  render() {

    function truefalse(i) {
      let even = i % 2;
      if(even === 0)
      {return true;}
      else{
        return false;
      }
    }

    return (
      <div>
        <h1 className={projectStyles.title}>My Projects</h1>
        {this.props.projects.allContentfulProjects.edges.map((edges, index) => (
          <Link to={edges.node.slug} key={index}>
          <div className={projectStyles.project} style={truefalse(index) ?{flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
            <div className={projectStyles.project__image} data-aos={truefalse(index) ?"fade-left": "fade-right"}>
              <Img sizes={edges.node.image.sizes} style={{height:'60vh'}}> </Img>
            </div>
            <div className={projectStyles.project__text} data-aos={truefalse(index) ?"fade-right": "fade-left"}>
              <h1 style={{maxWidth:'600px'}}>
                {edges.node.title}
              </h1>
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