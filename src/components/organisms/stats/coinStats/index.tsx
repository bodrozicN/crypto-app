import React from "react";
import { CoinDetails, TCurrency } from "../../../../types";
import { Filter, Stat } from "../../../moleculs";
import { Span, Symbol, Anchor } from "../../../atoms";
import { StyledCoinStats } from "./style";
import { numberFormatter } from "../../../../helpers";

type TCoinStats = Partial<
  Pick<
    CoinDetails,
    | "24hVolume"
    | "change"
    | "listedAt"
    | "marketCap"
    | "numberOfExchanges"
    | "numberOfMarkets"
    | "symbol"
    | "websiteUrl"
    | "name"
  >
>;

type Props = {
  coinStatsProps: TCoinStats;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};

const CoinStats = ({ coinStatsProps, handleSelect, currency }: Props) => {
  //prettier-ignore
  const [curr, volume] = numberFormatter(coinStatsProps?.["24hVolume"], currency);
  const [percent, change] = numberFormatter(coinStatsProps?.change);
  const listedAt = coinStatsProps.listedAt
    ? new Date(coinStatsProps?.listedAt * 1000).toLocaleDateString()
    : "";
  const [, marketCap] = numberFormatter(coinStatsProps.marketCap, currency);

  return (
    <StyledCoinStats>
      <Symbol $type="secondary" title={coinStatsProps.symbol} />
      <Stat title="Volume 24h" value={volume} char={curr} />
      <Stat title="Change" value={change} char={percent} />
      <Stat title="Listed at" value={listedAt} />
      <div className="anchor-container">
        <Span type="heroPrimary" content="Website" />
        <Anchor href={coinStatsProps.websiteUrl} title="Go to site" />
      </div>
      <Stat title="Market Cap" value={marketCap} char={curr} />
      <Stat title="Excanges" value={coinStatsProps.numberOfExchanges} />
      <Filter type="Currency" onChange={handleSelect} />
    </StyledCoinStats>
  );
};

export default CoinStats;
