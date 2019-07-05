import React, { Component } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Skills from "../components/skills";
import ContactMe from "../components/contactme";
import ReactGA from "react-ga";
import { graphql } from "gatsby";

import "aos/dist/aos.css";

class IndexPage extends Component {
  componentDidMount() {
    this.initializeReactGA();
    const AOS = require("aos");
    this.aos = AOS;
    this.aos.init({
      duration: 800,
      offset: 60,
      disable: "mobile"
    });
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  initializeReactGA() {
    ReactGA.initialize("UA-140382259-1");
    ReactGA.pageview("/homepage");
  }

  render() {
    return (
      <Layout indexLayout="true" props={this.props.data}>
        <SEO title="Web Development" />
        <Bio />
        <Projects projects={this.props.data} />
        <Skills />
        <ContactMe about={this.props.data.allContentfulAbout} />
      </Layout>
    );
  }
}

export default IndexPage;

export const ProjectQuery = graphql`
  query ProjectQuery {
    allContentfulProjects(sort: { fields: [index], order: ASC }) {
      edges {
        node {
          id
          title
          gitHub
          slug
          subHeading
          index
          content {
            json
          }
          image {
            sizes(maxWidth: 2000) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          id
          title
          slug
          content {
            childMarkdownRemark {
              html
            }
          }
          headerImage {
            sizes(maxWidth: 400) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
