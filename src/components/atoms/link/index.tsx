import React from "react";
import { StyledHomeLink, StyledPortfolioLink } from "./style";

type Props = {
  to: string;
  title: string;
  type: "homeLink" | "portfolioLink";
};

const Link = (props: Props) => {
  switch (props.type) {
    case "homeLink":
      return (
        <StyledHomeLink role="navLink" to={props.to}>
          {props.title}
        </StyledHomeLink>
      );
    case "portfolioLink":
      return (
        <StyledPortfolioLink role="navLink" to={props.to}>
          {props.title}
        </StyledPortfolioLink>
      );
  }
};

export default Link;
