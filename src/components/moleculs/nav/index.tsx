import React from "react";
import { Link } from "../../atoms";
import { StyledNav } from "./style";

const Nav = () => {
  return (
    <StyledNav>
      <Link type="homeLink" title="Home" to="/" />
      <Link type="portfolioLink" title="Portfolio" to="/portfolio" />
    </StyledNav>
  );
};

export default Nav;
