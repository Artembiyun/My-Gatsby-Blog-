import React, { Component } from 'react';
import PropTypes from 'prop-types';
import projectStyles from "../styles/project.module.scss"
import Img from "gatsby-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



class projects extends Component {
  render() {

    function truefalse(i) {
      let even = i % 2;
      if(even == 0)
      {return true;}
      else{
        return false;
      }
    }

    return (
      <div>
        {this.props.projects.allContentfulProjects.edges.map((edges, index) => (
          <div className={projectStyles.project} key={index} style={truefalse(index) ?{flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
            <div className={projectStyles.project__image} data-aos={truefalse(index) ?"fade-left": "fade-right"}>
              <Img sizes={edges.node.image.sizes} style={{height:'60vh'}}> </Img>
            </div>
            <div className={projectStyles.project__text} data-aos={truefalse(index) ?"fade-right": "fade-left"}>
              <h1 style={{width:'600px'}}>
                {edges.node.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default projects;