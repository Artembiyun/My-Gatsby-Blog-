import React, { Component } from 'react';
import skillstyles from "../styles/skills.module.scss"
import gatsbyIcon from "../images/skills-icons/gatsby.png"
import reactIcon from "../images/skills-icons/react.png"
import jsIcon from "../images/skills-icons/js.png"
import nodeIcon from "../images/skills-icons/nodejs.png"
import sass from "../images/skills-icons/sass.png"
import graphql from "../images/skills-icons/graphql.png"
import contentful from "../images/skills-icons/contentful.png"
import heartIcon from "../images/skills-icons/heart.png"


class skills extends Component {
    render() {
        return (
            <div className={skillstyles.skillsBox}>
                <h1>Built With</h1>
                <div className={skillstyles.skillsBox__holder}>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={jsIcon} width='200px' height='200px' alt="Js Icon" />
                        <h1>Javascript</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={reactIcon} className={skillstyles.rotate} width='300px' alt="React Icon" />
                        <h1>React</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                        <img src={gatsbyIcon} width='200px' height='200px' alt="Gatsby Icon"  />
                        <h1>Gatsby</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={sass} width='200px' height='200px' alt="SASS Icon" />
                        <h1>Sass</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={nodeIcon} width='200px' height='200px' alt="Node Icon" />
                        <h1>NodeJs</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={graphql} width='200px' height='200px' alt="GQL Icon" />
                        <h1>GraphQL</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill}>
                    <img src={contentful} width='200px' height='200px' alt="Contentful Icon" />
                        <h1>Contentful</h1>
                    </div>
                    <div className={skillstyles.skillsBox__holder__skill} data-aos="fade-up-left"
                    data-aos-easing="linear"
                    data-aos-duration="5000"
                    data-aos-delay="300"
                    >
                    <img src={heartIcon} width='200px' alt="Heart Icon"/>
                        <h1>& Love</h1>
                    </div>
                </div>
            </div>
        );
    }
}

skills.propTypes = {

};

export default skills;