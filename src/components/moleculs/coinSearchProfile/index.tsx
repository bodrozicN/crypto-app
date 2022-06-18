import React from "react";
import { Img, Paragraph, Symbol } from "../../atoms";
import { StyledCoinSearchProfile } from "./style";

type Props = {
  iconUrl: string;
  name: string;
  symbol: string;
};

const CoinSearchProfile = ({ iconUrl, name, symbol }: Props) => {
  return (
    <StyledCoinSearchProfile>
      <Img type="tableImg" src={iconUrl} alt={name} />
      <Paragraph type="bold" title={name} />
      <Symbol $type="primary" title={symbol} />
    </StyledCoinSearchProfile>
  );
};

export default CoinSearchProfile;
