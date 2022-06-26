import React from "react";
import { Link, OLink } from "../../atoms";
import { Wrapper } from "./style";

const Nav = () => {
  return (
    <Wrapper>
      <Link type={OLink.linkPrimary} title="Home" to="/" />
      <Link type={OLink.linkSecondary} title="Portfolio" to="/portfolio" />
    </Wrapper>
  );
};

export default Nav;
