import React from "react";
import { ListItem } from "../../moleculs";
import { StyledList } from "./style";
import { SearchList } from "../../../types";
import uniqid from "uniqid";

type Props = {
  searchList: SearchList[] | undefined;
};

const List = ({ searchList }: Props) => {
  console.log("List");

  return (
    <StyledList>
      {searchList?.map((coin) => (
        <ListItem key={uniqid()} {...coin} />
      ))}
    </StyledList>
  );
};

export default List;
