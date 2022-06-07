import React from "react";
import { CoinCredentials as TCoinCredentials } from "../../../types";
import { Img, Span, Heading } from "../../atoms";
import { StyledCoinCredentials } from "./style";

const CoinCredentials = (props: TCoinCredentials) => {
  const { iconUrl, name, rank } = props;
  return (
    <StyledCoinCredentials>
      <Img type="detailsImg" src={iconUrl} alt={name} />
      <Heading type="h1" title={name} $isBold />
      <Span type="heroPrimary" content="Rank" />
      <Span type="heroPrimary" content={`# ${rank}`} />
    </StyledCoinCredentials>
  );
};

export default CoinCredentials;
