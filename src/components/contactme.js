import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from "react-ga";
import blogpost from "../styles/contactme.module.scss";
import { Link, graphql } from "gatsby";

class contactme extends Component {
  render() {
    return (
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          {this.props.about.edges.map(edges => (
            <div id={blogpost.about}>
              <div className={blogpost["about-box__header-container"]}>
                <h3 style={{ color: "black" }}>E: krlovell017 at gmail</h3>
                <h3 style={{ color: "black" }}>P: 718~578~5005</h3>
                <div className={blogpost.socmedia}>
                  <a href="https://www.instagram.com/artembiyun/">
                    <img
                      src={require("../images/icons/instagram-icon.svg")}
                      alt="Instagram Icon"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/kathryn-lovell-688845112/">
                    <img
                      src={require("../images/icons/linkedin-icon.svg")}
                      alt="Linkedin Profile"
                    />
                  </a>
                </div>
              </div>
              <Img
                sizes={edges.node.headerImage.sizes}
                className={blogpost.aboutImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

contactme.propTypes = {};

export default contactme;
