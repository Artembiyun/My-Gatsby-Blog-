import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import header from "../styles/header.module.scss"
require ('../styles/header.module.scss')

const Header = ({ siteTitle }) => (
  <header id={header.sidebar}>
  <div id={header.angle}>
  </div>
    <div className={header.title}>
      <h2>
        <Link to="/" className="white">
          {siteTitle}
        </Link>
      </h2>
    </div>
    <div className={header.subheading}>
      <h5 style={{color:'white'}}>
        Web Dev Blog <br/>
         For the Future
      </h5>
    </div>
    <div className={header.menubox}>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
