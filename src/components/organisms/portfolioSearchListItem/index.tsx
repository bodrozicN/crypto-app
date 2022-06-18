import React from "react";
import { SearchList } from "../../../types/searchList";
import { CoinSearchProfile } from "../../moleculs";
import { CoinForStore } from "../../../types";
import { StyledPortfolioSearchListItem } from "./style";
import { Span } from "../../atoms";

type Props = {
  coin: SearchList;
  handleSetCoinForStoring: (values: Partial<CoinForStore>) => void;
};

const PortfolioSearchListItem = ({ coin, handleSetCoinForStoring }: Props) => {
  return (
    <StyledPortfolioSearchListItem
      onClick={() => handleSetCoinForStoring({ ...coin, price: +coin.price })}
    >
      <CoinSearchProfile {...coin} />
      <Span type="pinkSpan" content="Add +" />
    </StyledPortfolioSearchListItem>
  );
};

export default PortfolioSearchListItem;
