import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, animateScroll as scroll } from "react-scroll";
import header from "../styles/header.module.scss";

class smoothscroll extends Component {
    render() {
        return (
            <Link data-scroll to="bio"
                spy={true}
                smooth={true}
                duration={500}
            >
            <div class={header.arrow}></div>
            </Link>
        );
    }
}

smoothscroll.propTypes = {

};

export default smoothscroll;