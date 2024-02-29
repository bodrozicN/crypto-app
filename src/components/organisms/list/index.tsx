import React from "react";
import { ListItem } from "../../moleculs";
import { Wrapper } from "./style";
import { CoinSearchResult } from "../../../types";

type Props = {
  searchList: CoinSearchResult[] | undefined;
};

const List = ({ searchList }: Props) => {
  return (
    <Wrapper>
      {searchList?.map((coin) => (
        <ListItem key={coin.uuid} {...coin} />
      ))}
    </Wrapper>
  );
};

export default List;
