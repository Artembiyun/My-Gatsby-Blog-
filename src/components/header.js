import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Scroll from "../components/smoothscroll";
import Cards from "../components/cards";
import Typist from "react-typist";
import header from "../styles/header.module.scss";
require("../styles/header.module.scss");


function randomQuote(){
let Quotes = ["Help, I can't stop thinking about code", "Creativity, reiteration and elevator music", "Web Developer", "It just keeps getting better and better"]
  let i = Math.floor(Math.random()*Quotes.length);
  return Quotes[i];
}

const headerbox = ({ siteTitle, indexLayout }) => (
  <div className={indexLayout ? header.indexMainTitleBox : ""}>
    <div className={indexLayout ? header.indexTitle : header.title}>
      <h2 className={indexLayout ? header.indexTitleText : " "}>
        <Link to="/" className="white">
          {siteTitle}
        </Link>
      </h2>
    </div>
    <div className={indexLayout ? header.indexSubheading : header.subheading}>
      {indexLayout ? (
        <h3 style={{ color: "white" }}>
          <Typist avgTypingSpeed={1}>{randomQuote()}</Typist>
        </h3>
      ) : (
        <h3 style={{ color: "white", fontSize: "1.2rem" }}>
          <Typist>
            Web Dev Blog <br />
            For the Future!
          </Typist>
        </h3>
      )}
    </div>
  </div>
);

const menubox = ({ indexLayout }) => (
  <div className={indexLayout ? header.indexMenubox : header.menubox}>
    <div className={header.menubox__item}>
      <h3>
        <Link to="/projects-page" className="white">
          Projects
        </Link>
      </h3>
    </div>
    <div className={header.menubox__item}>
      <h3>
        <Link to="/articles" className="white">
          Blog
        </Link>
      </h3>
    </div>
    <div className={header.menubox__item}>
      <h3>
        <Link to="/about" className="white">
          About
        </Link>
      </h3>
    </div>
  </div>
);

const Header = ({ siteTitle, indexLayout, props }) => (
  <header className={indexLayout ? header.indexSidebar : header.sidebar}>
    <div id={header.angle} />
    {indexLayout ? (
      <div className={header.indexTopBox}>
        <div style={{width:'100vw', display:'flex', justifyContent:'center'}}>
        <Scroll/>
        </div>
        {headerbox({ siteTitle, indexLayout })}
        {menubox({ indexLayout })}
      </div>
    ) : (
      <>
        {headerbox({ siteTitle, indexLayout })}
        {menubox({ indexLayout })}
      </>
    )}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;