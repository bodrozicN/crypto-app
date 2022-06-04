import React from "react";
import { CoinDetails, TCurrency } from "../../../../types";
import { StyledCoinHero } from "./style";
import { CoinCredentials } from "../../../moleculs";
import { CoinStats, CoinPriceSection } from "../../../organisms";
import { CoinOHLC } from "../../../../types/coinOHLC";

type Props = {
  coinDetails: CoinDetails | undefined;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
  ohlc: Partial<CoinOHLC>;
};

const CoinHero = ({ coinDetails, currency, handleSelect, ohlc }: Props) => {
  const coinCredentials = {
    name: coinDetails?.name,
    symbol: coinDetails?.symbol,
    iconUrl: coinDetails?.iconUrl,
    rank: coinDetails?.rank,
  };

  const coinStatsProps = {
    "24hVolume": coinDetails?.["24hVolume"],
    change: coinDetails?.change,
    listedAt: coinDetails?.listedAt,
    marketCap: coinDetails?.marketCap,
    numberOfExchanges: coinDetails?.numberOfExchanges,
    numberOfMarkets: coinDetails?.numberOfMarkets,
    symbol: coinDetails?.symbol,
    websiteUrl: coinDetails?.websiteUrl,
    name: coinDetails?.name,
  };

  return (
    <StyledCoinHero>
      <div>
        <CoinCredentials coinCredentials={coinCredentials} />
        <CoinStats {...{ coinStatsProps, currency, handleSelect }} />
        <CoinPriceSection {...{ ohlc, currency }} />
      </div>
    </StyledCoinHero>
  );
};

export default CoinHero;
