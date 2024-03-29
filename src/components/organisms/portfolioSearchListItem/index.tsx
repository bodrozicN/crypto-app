import React from "react";
import { CoinSearchResult, PortfolioCoin } from "../../../types";
import { CoinSearchProfile } from "../../moleculs";
import { Wrapper } from "./style";
import { Span } from "../../atoms";

type Props = {
  coin: CoinSearchResult;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioSearchListItem = ({ coin, handleSetCoin }: Props) => {
  return (
    <Wrapper onClick={() => handleSetCoin({ ...coin, price: +coin.price })}>
      <CoinSearchProfile {...coin} />
      <Span $type="pinkSpan" content="Add +" />
    </Wrapper>
  );
};

export default PortfolioSearchListItem;
