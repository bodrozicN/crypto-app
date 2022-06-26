import React from "react";
import { ListItem } from "../../moleculs";
import { Wrapper } from "./style";
import { CoinSearchResult } from "../../../types";
import uniqid from "uniqid";

type Props = {
  searchList: CoinSearchResult[] | undefined;
};

const List = ({ searchList }: Props) => {
  return (
    <Wrapper>
      {searchList?.map((coin) => (
        <ListItem key={uniqid()} {...coin} />
      ))}
    </Wrapper>
  );
};

export default List;
