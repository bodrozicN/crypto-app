import React from "react";
import { SearchList } from "../../../types/searchList";
import { StyledPortfolioSearchList } from "./style";
import { CoinForStore } from "../../../types";
import { PortfolioSearchListItem } from "../../organisms";

type Props = {
  searchResult: SearchList[] | undefined;
  handleSetCoinForStoring: (values: Partial<CoinForStore>) => void;
};

const PortfolioList = ({ searchResult, handleSetCoinForStoring }: Props) => {
  return (
    <StyledPortfolioSearchList>
      {searchResult?.map((item) => {
        return (
          <PortfolioSearchListItem
            coin={item}
            handleSetCoinForStoring={handleSetCoinForStoring}
          />
        );
      })}
    </StyledPortfolioSearchList>
  );
};

export default PortfolioList;
