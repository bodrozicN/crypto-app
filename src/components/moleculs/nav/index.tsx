import React from "react";
import { Link, OLink } from "../../atoms";
import { StyledNav } from "./style";

const Nav = () => {
  return (
    <StyledNav>
      <Link type={OLink.linkPrimary} title="Home" to="/" />
      <Link type={OLink.linkSecondary} title="Portfolio" to="/portfolio" />
    </StyledNav>
  );
};

export default Nav;
