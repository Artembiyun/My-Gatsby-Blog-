import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import header from "../styles/header.module.scss";

class smoothscroll extends Component {
  render() {
    return (
      <Link
        data-scroll
        to={this.props.to}
        spy={true}
        smooth={true}
        duration={500}
        className={header.arrowBox}
      >
        <div className={header.arrow} />
      </Link>
    );
  }
}

smoothscroll.propTypes = {
  to: PropTypes.string
};

smoothscroll.defaultProps = {
  to: `bio`
};

export default smoothscroll;
