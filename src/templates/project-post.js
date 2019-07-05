import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import blogpost from "../styles/blog-post.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (!node.data.target.fields) {
        return "Sorry, something went wrong..";
      } else {
        let url = node.data.target.fields.file["en-US"].url;
        return (
          <img
            className={blogpost.centered}
            src={"https:" + url}
            alt="content"
            width="800px"
          />
        );
      }
    }
  }
};

class project extends Component {
  render() {
    const { title, image, gitHub } = this.props.data.contentfulProjects;
    return (
      <Layout minlayout={true}>
        <SEO title="Projects" />
        <div id={blogpost.content}>
          <div id={blogpost.content__main}>
            <div id={blogpost.content__main__centered}>
              <div className={blogpost.imageBox}>
                <Img sizes={image.sizes} style={{ minWidth: "1000px" }} />
              </div>
              <h2
                style={{
                  color: "black",
                  paddingTop: "0.8rem",
                  paddingBottom: "0.5rem",
                  textAlign: "center"
                }}
              >
                {title}
              </h2>
              <div className={blogpost.buttons}>
                <a className={blogpost.git} href={gitHub}>
                  Git Repo
                </a>
                <div className={blogpost.live}>Live version(coming soon)</div>
              </div>
              <div className={blogpost.contentBox}>
                {documentToReactComponents(
                  this.props.data.contentfulProjects.content.json,
                  options
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default project;

export const ProjectpageQuery = graphql`
  query ProjectPageQuery($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      gitHub
      createdAt(formatString: "MMMM DD, YYYY")
      image {
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        json
      }
    }
  }
`;
