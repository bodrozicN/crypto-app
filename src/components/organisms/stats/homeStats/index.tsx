import React from "react";
import { Wrapper } from "./style";
import { Stat, Filter } from "../../../moleculs";
import { currencyFormatter } from "../../../../helpers";
import { HomeHeroProps, OFIlter } from "../../../../types";

const HomeStats = ({ handleSelectFilters, stats, currency }: HomeHeroProps) => {
  const [curr, volume] = currencyFormatter(stats?.total24hVolume, currency);
  const [, marketCap] = currencyFormatter(stats?.totalMarketCap, currency);

  return (
    <Wrapper>
      <Stat title="Coins" value={stats?.totalCoins} />
      <Stat title="Excanges" value={stats?.totalExchanges} />
      <Stat title="Markets" value={stats?.totalMarkets} />
      <Stat title="24h Volume" value={curr && `${curr} ${volume}`} />
      <Stat title="Total Market Cap" value={curr && `${curr} ${marketCap}`} />
      <Filter onChange={handleSelectFilters} type={OFIlter.currency} />
    </Wrapper>
  );
};

export default HomeStats;
