import React, { Component } from "react";
import contactmestyles from "../styles/contactme.module.scss";
import { Link } from "gatsby";

class contactme extends Component {
  render() {
    return (
      <div className={contactmestyles.contactbox}>
        <h1>Lets stay in touch!</h1>
        <h2>Contact me @</h2>
        <Link to="/about">
          <h2>artembiyun@live.ca</h2>
        </Link>
      </div>
    );
  }
}

contactme.propTypes = {};

export default contactme;
