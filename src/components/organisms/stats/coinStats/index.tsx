import React from "react";
import { CoinHeroStats, TCurrency } from "../../../../types";
import { Filter, Stat } from "../../../moleculs";
import { Span, Symbol, Anchor } from "../../../atoms";
import { Wrapper } from "./style";
import {
  dateFormatter,
  currencyFormatter,
  formatString,
  percentFormatter,
} from "../../../../helpers";

type Props = {
  coinHeroStats: CoinHeroStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const CoinStats = ({ coinHeroStats, handleSelect, currency }: Props) => {
  //prettier-ignore
  const [curr, volume] = currencyFormatter(
    coinHeroStats?.["24hVolume"],
    currency
  );
  const [percent, change] = percentFormatter(coinHeroStats?.change);
  const listedAt = dateFormatter(coinHeroStats?.listedAt);
  const [, marketCap] = currencyFormatter(coinHeroStats.marketCap, currency);

  return (
    <Wrapper>
      <Symbol $type="secondary" title={formatString(coinHeroStats.symbol, 4)} />
      <Stat title="Volume 24h" value={curr && `${curr} ${volume}`} />
      <Stat title="Change" value={change && `${change} ${percent}`} />
      <Stat title="Listed at" value={listedAt} />
      <div className="anchor-container">
        <Span $type="heroPrimary" content="Website" />
        <Anchor href={coinHeroStats.websiteUrl} title="Go to site" />
      </div>
      <Stat title="Market Cap" value={curr && `${curr} ${marketCap}`} />
      <Stat title="Excanges" value={coinHeroStats.numberOfExchanges} />
      <Filter type="Currency" onChange={handleSelect} />
    </Wrapper>
  );
};

export default CoinStats;
