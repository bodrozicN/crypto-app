import React from "react";
import { Logo, Form } from "../../moleculs";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo value1="Crypto" value2="App" />
        <Form />
      </div>
    </StyledHeader>
  );
};

export default Header;
