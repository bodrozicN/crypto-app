import React from "react";
import { ListItem } from "../../moleculs";
import { StyledList } from "./style";
import { CoinSearchResult } from "../../../types";
import uniqid from "uniqid";

type Props = {
  searchList: CoinSearchResult[] | undefined;
};

const List = ({ searchList }: Props) => {
  return (
    <StyledList>
      {searchList?.map((coin) => (
        <ListItem key={uniqid()} {...coin} />
      ))}
    </StyledList>
  );
};

export default List;
