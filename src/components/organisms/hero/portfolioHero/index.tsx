import React from "react";
import { StyledPortfolioHero } from "./style";
import { Heading, Span } from "../../../atoms";
import { Form } from "../../../moleculs";

const PortfolioPage = () => {
  const [value, setValue] = React.useState("");
  return (
    <StyledPortfolioHero>
      <div>
        <div className="container">
          <Heading type="h1" title="My Portfolio" $isBold />
          <Span type="heroPrimary" content="Created At" />
        </div>
        <div className="value-container">
          <Heading type="h1" title="$29.291.50" $isBold />
          <Span type="heroPrimary" content="Total value" />
        </div>
        <Form
          $type="large"
          onChange={(e) => setValue(e.target.value)}
          onSubmit={(e) => e.preventDefault()}
          placeHolder="Search for an asset to add..."
          value={value}
          className="portfolioSearch"
        />
      </div>
    </StyledPortfolioHero>
  );
};

export default PortfolioPage;
