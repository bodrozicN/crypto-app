import React from "react";
import { StyledPortfolioHero } from "./style";
import { Heading, Span } from "../../../atoms";
import { Form } from "../../../moleculs";
import { PortfolioList } from "../../../organisms";
import { PortfolioHeroProps, CoinForStore } from "../../../../types";

type Props = {
  heroProps: PortfolioHeroProps;
  handleSetCoinForStoring: (values: Partial<CoinForStore>) => void;
};

const PortfolioHero = ({ handleSetCoinForStoring, heroProps }: Props) => {
  const { isActiveElement, formProps, searchResult } = heroProps;
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
          {...formProps}
          $type="large"
          placeHolder="Search for an asset to add..."
          className="add-asset-search"
        />
        {isActiveElement && (
          <PortfolioList {...{ searchResult, handleSetCoinForStoring }} />
        )}
      </div>
    </StyledPortfolioHero>
  );
};

export default PortfolioHero;
