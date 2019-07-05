import React from "react";

import cards from "../styles/cards.module.scss";
import Img from "gatsby-image";
import { Link } from "gatsby";
require("../styles/layout.scss");

const Cards = props => {
  return (
    <div className={cards["cards-segment"]}>
      <h2 id={cards.lbpBanner}> Latest Blog Posts</h2>
      <div className={cards.holder}>
        {props.props.allContentfulBlog.edges.map((edges, index) => (
          <Link
            to={"/" + edges.node.slug}
            key={edges.node.id}
            className={cards["card" + index]}
          >
            <div
              className={
                cards["hvr-grow"] +
                " " +
                cards.holder__cards +
                " " +
                cards["card" + index]
              }
            >
              <Img
                sizes={edges.node.featuredImage.sizes}
                style={{ opacity: "0.5" }}
              />
              <p className={cards.title}>{edges.node.title}</p>
              <p className={cards.date}>{edges.node.createdAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
