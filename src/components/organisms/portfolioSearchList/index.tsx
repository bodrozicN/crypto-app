import React from "react";
import { CoinSearchResult, PortfolioCoin } from "../../../types";
import { Wrapper } from "./style";
import { PortfolioSearchListItem } from "../../organisms";
import uniqid from "uniqid";

type Props = {
  searchResult: CoinSearchResult[] | undefined;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioList = ({ searchResult, handleSetCoin }: Props) => {
  return (
    <Wrapper>
      {searchResult?.map((item) => {
        return (
          <PortfolioSearchListItem
            key={uniqid()}
            coin={item}
            handleSetCoin={handleSetCoin}
          />
        );
      })}
    </Wrapper>
  );
};

export default PortfolioList;
