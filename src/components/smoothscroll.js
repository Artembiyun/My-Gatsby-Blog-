import React, { Component } from "react";
import { Link } from "react-scroll";
import header from "../styles/header.module.scss";

class smoothscroll extends Component {
  render() {
    return (
      <Link data-scroll to="bio" spy={true} smooth={true} duration={500}>
        <div className={header.arrow} />
      </Link>
    );
  }
}

smoothscroll.propTypes = {};

export default smoothscroll;
