import React from "react";
import { CoinHeroStats, TCurrency } from "../../../../types";
import { Filter, Stat } from "../../../moleculs";
import { Span, Symbol, Anchor } from "../../../atoms";
import { StyledCoinStats } from "./style";
import {
  dateFormatter,
  numberFormatter,
  formatString,
} from "../../../../helpers";

type Props = {
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const CoinStats = ({ coinHeroStats, handleSelect, currency }: Props) => {
  //prettier-ignore
  const [curr, volume] = numberFormatter(coinHeroStats?.["24hVolume"], currency);
  const [percent, change] = numberFormatter(coinHeroStats?.change);
  const listedAt = dateFormatter(coinHeroStats?.listedAt);

  const [, marketCap] = numberFormatter(coinHeroStats.marketCap, currency);

  return (
    <StyledCoinStats>
      <Symbol $type="secondary" title={formatString(coinHeroStats.symbol, 4)} />
      <Stat title="Volume 24h" value={volume} char={curr} />
      <Stat title="Change" value={change} char={percent} />
      <Stat title="Listed at" value={listedAt} />
      <div className="anchor-container">
        <Span type="heroPrimary" content="Website" />
        <Anchor href={coinHeroStats.websiteUrl} title="Go to site" />
      </div>
      <Stat title="Market Cap" value={marketCap} char={curr} />
      <Stat title="Excanges" value={coinHeroStats.numberOfExchanges} />
      <Filter type="Currency" onChange={handleSelect} />
    </StyledCoinStats>
  );
};

export default CoinStats;
