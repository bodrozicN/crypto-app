import React from "react";
import { CoinDetails } from "../../../types";
import { Img, Span, Heading } from "../../atoms";
import { StyledCoinCredentials } from "./style";

type TCoinCredentials = Partial<
  Pick<CoinDetails, "name" | "symbol" | "iconUrl" | "rank">
>;

type Props = {
  coinCredentials: TCoinCredentials | undefined;
};

const CoinCredentials = ({ coinCredentials }: Props) => {
  return (
    <StyledCoinCredentials>
      <Img
        type="detailsImg"
        src={coinCredentials?.iconUrl}
        alt={coinCredentials?.name}
      />
      <Heading type="h1" title={coinCredentials?.name} $isBold />
      <Span type="heroPrimary" content="Rank" />
      <Span type="heroPrimary" content={`# ${coinCredentials?.rank}`} />
    </StyledCoinCredentials>
  );
};

export default CoinCredentials;
