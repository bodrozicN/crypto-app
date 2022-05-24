import React from "react";
import { StyledStats } from "./style";
import { Stat, Filter } from "../../moleculs";
import { IStats } from "../../../interfaces";
import { numberFormatter } from "../../../helpers";
import { OCurrency, OFIlter, TCurrency } from "../../../types";

type Props = {
  stats: IStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const Stats = ({ handleSelect, stats, currency }: Props) => {
  //prettier-ignore
  const {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = stats;

  // destructuring rerurned string array from numberFormatter function
  const [char, volume] = numberFormatter(total24hVolume, currency);
  const [, marketCap] = numberFormatter(totalMarketCap, currency);

  return (
    <StyledStats role="stats">
      <Stat title="Coins" value={totalCoins} />
      <Stat title="Excanges" value={totalExchanges} />
      <Stat title="Markets" value={totalMarkets} />
      <Stat title="24h Volume" value={volume} char={char} />
      <Stat title="Total Market Cap" value={marketCap} char={char} />
      <Filter onChange={handleSelect} type={OFIlter.currency} />
    </StyledStats>
  );
};

export default Stats;
