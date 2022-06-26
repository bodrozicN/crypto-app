import React from "react";
import { Heading, Button } from "../../atoms";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <Heading type="h4" title="Something Went Wrong" $isBold />
        <Button
          $type="loginButton"
          onClick={() => navigate("/")}
          content="Go to Home"
        />
      </div>
    </Wrapper>
  );
};

export default Error;
