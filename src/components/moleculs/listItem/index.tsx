import React from "react";
import { Wrapper } from "./style";
import { CoinSearchResult } from "../../../types";
import { Link } from "react-router-dom";
import CoinSearchProfile from "../coinSearchProfile";

const ListItem = (props: CoinSearchResult) => {
  return (
    <Wrapper>
      <Link to={`coin/${props.uuid}`}>
        <CoinSearchProfile {...props} />
      </Link>
    </Wrapper>
  );
};

export default ListItem;
