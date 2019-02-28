import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import header from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <header id={header.sidebar}>
  <div id={header.angle}>
  </div>
    <div className={header.title}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={header.subheading}>
      <h4>
        Dedicated to the future
      </h4>
    </div>
    <div className={header.menubox}>
      <div className={header.menubox__item}>
        <h2>
          <Link to="/articles">
            Blog
          </Link>
        </h2>
      </div>
      <div className={header.menubox__item}>
        <h2>
          <Link to="/about">
            About
          </Link>
        </h2>
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
