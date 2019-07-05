import React, { Component } from "react";
import bioStyle from "../styles/bio.module.scss";

class bio extends Component {
  render() {
    return (
      <div className={bioStyle.bioMain} id="bio">
        <div className={bioStyle.textHolder} data-aos="fade-up-right">
          <h1>I'm Kat, an engineer in NYC.</h1>
        </div>
        <div className={bioStyle.textHolder} data-aos="fade-up-left">
          <h2>Coordinating where Art, Science & Craft meet.</h2>
        </div>
      </div>
    );
  }
}

bio.propTypes = {};

export default bio;
