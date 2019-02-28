import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import blogpost from "../styles/blog-post.module.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
      <div id={blogpost.content}>
        <div id={blogpost.content__main}>
          <div id={blogpost.content__main__centered}>
          </div>
        </div>
      </div>
  </Layout>
)

export default About
