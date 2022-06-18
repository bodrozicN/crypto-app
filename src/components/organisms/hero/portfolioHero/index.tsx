import React from "react";
import { StyledPortfolioHero } from "./style";
import { Heading, Span } from "../../../atoms";
import { Form } from "../../../moleculs";
import { PortfolioList } from "../../../organisms";
import { PortfolioHeroProps, PortfolioCoin } from "../../../../types";

type Props = {
  heroProps: PortfolioHeroProps;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioHero = ({ handleSetCoin, heroProps }: Props) => {
  const { isActiveElement, formProps, searchResult, currentPortfolioValue } =
    heroProps;
  return (
    <StyledPortfolioHero>
      <div>
        <div className="container">
          <Heading type="h1" title="My Portfolio" $isBold />
          <Span type="heroPrimary" content="Created At" />
        </div>
        <div className="value-container">
          <Heading type="h1" title={currentPortfolioValue} $isBold />
          <Span type="heroPrimary" content="Total value" />
        </div>
        <Form
          {...formProps}
          $type="large"
          placeHolder="Search for an asset to add..."
          className="add-asset-search"
        />
        {isActiveElement && (
          <PortfolioList {...{ searchResult, handleSetCoin }} />
        )}
      </div>
    </StyledPortfolioHero>
  );
};

export default PortfolioHero;
