import React from "react";

import cards from "../styles/cards.module.scss";
import Img from "gatsby-image";
import { Link } from "gatsby"

const Cards = props => {
  return (
    <div className={cards["cards-segment"]}>
      <div className={cards.holder}>
        {props.props.allContentfulBlog.edges.map(edges => (
          <Link to={edges.node.slug}>
          <div className={cards["hvr-grow"] + " " + cards.holder__cards}>
            <Img resolutions={edges.node.featuredImage.resolutions}/>
            <h3 className={cards.title}>{edges.node.title}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
