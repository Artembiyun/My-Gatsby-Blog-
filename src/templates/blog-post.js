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

class BlogPost extends Component {
  render() {
    const { title, createdAt, heroImage } = this.props.data.contentfulBlog;
    return (
      <Layout minlayout={true}>
        <SEO title="Blog" />
        <div id={blogpost.content}>
          <div id={blogpost.content__main}>
            <div id={blogpost.content__main__centered}>
              <div className={blogpost.imageBox}>
                <Img sizes={heroImage.sizes} />
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
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                {createdAt}
              </p>
              <div className={blogpost.contentBox}>
                {documentToReactComponents(
                  this.props.data.contentfulBlog.richContent.json,
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

export default BlogPost;
export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      heroImage {
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes
        }
      }
      richContent {
        json
      }
    }
  }
`;
