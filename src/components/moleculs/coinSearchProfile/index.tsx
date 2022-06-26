import React from "react";
import { formatString } from "../../../helpers";
import { Img, Paragraph, Symbol } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  iconUrl: string;
  name: string;
  symbol: string;
};

const CoinSearchProfile = ({ iconUrl, name, symbol }: Props) => {
  return (
    <Wrapper>
      <Img type="tableImg" src={iconUrl} alt={name} />
      <Paragraph type="bold" title={formatString(name, 8, true)} />
      <Symbol $type="primary" title={symbol} $withDot />
    </Wrapper>
  );
};

export default CoinSearchProfile;
