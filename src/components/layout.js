import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import img2 from "../images/backgroundImages/image5.jpg"
import img3 from "../images/backgroundImages/image6.jpg"
import img4 from "../images/backgroundImages/image7.jpg"
import img5 from "../images/backgroundImages/image8.jpg"
import img6 from "../images/backgroundImages/image9.jpg"
import img7 from "../images/backgroundImages/image10.jpg"

import header from "../styles/header.module.scss";
import Header from "./header"
require ('../styles/layout.scss')

function randombg(){
  let imgs = [img2, img3, img4, img5, img6, img7]
  let i = Math.floor(Math.random()*imgs.length);
  return imgs[i];
}

let mainBg = {
  backgroundImage: 'url(' + randombg() + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh'
}

let sideBg = {
  display: 'flex',
  backgroundImage: 'url(' + randombg() + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Layout = ({ children, indexLayout, props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={indexLayout ? mainBg : sideBg}>
        <Header siteTitle={data.site.siteMetadata.title} indexLayout={indexLayout} props={props} />
          <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
