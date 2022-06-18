import React from "react";
import { CoinSearchResult, PortfolioCoin } from "../../../types";
import { StyledPortfolioSearchList } from "./style";
import { PortfolioSearchListItem } from "../../organisms";

type Props = {
  searchResult: CoinSearchResult[] | undefined;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioList = ({ searchResult, handleSetCoin }: Props) => {
  return (
    <StyledPortfolioSearchList>
      {searchResult?.map((item) => {
        return (
          <PortfolioSearchListItem coin={item} handleSetCoin={handleSetCoin} />
        );
      })}
    </StyledPortfolioSearchList>
  );
};

export default PortfolioList;
