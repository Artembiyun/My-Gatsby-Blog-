import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bioStyle from "../styles/bio.module.scss"

class bio extends Component {
    render() {
        return (
            <div className={bioStyle.bioMain}>
                <div className={bioStyle.textHolder}>
                    <h1>Building it better, faster, stronger ect. </h1>
                </div>
                <div className={bioStyle.vl}></div>
                <div className={bioStyle.hl}></div>
                <div className={bioStyle.textHolder}>
                    <h2>Hi, I'm Artem Biyun, a web developer in Toronto Ontario. I specialize in React, I believe a lot can be said with very little and I love building Organizational Tools for everyone </h2>
                </div>
            </div>
        );
    }
}

bio.propTypes = {

};

export default bio;