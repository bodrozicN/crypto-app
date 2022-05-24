import React, { useEffect, useState } from "react";
import { StyledStats } from "./style";
import { Stat, Filter } from "../../moleculs";
import { IStats } from "../../../interfaces";
import { numberFormatter } from "../../../helpers";
import { OFIlter, TCurrency } from "../../../types";

type Props = {
  stats: IStats | undefined;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const Stats = ({ handleSelect, stats, currency }: Props) => {
  const [char, volume] = numberFormatter(stats?.total24hVolume, currency);
  const [, marketCap] = numberFormatter(stats?.totalMarketCap, currency);

  return (
    <StyledStats role="stats">
      <Stat title="Coins" value={stats?.totalCoins} />
      <Stat title="Excanges" value={stats?.totalExchanges} />
      <Stat title="Markets" value={stats?.totalMarkets} />
      <Stat title="24h Volume" value={volume} char={char} />
      <Stat title="Total Market Cap" value={marketCap} char={char} />

      <Filter onChange={handleSelect} type={OFIlter.currency} />
    </StyledStats>
  );
};

export default React.memo(Stats);
