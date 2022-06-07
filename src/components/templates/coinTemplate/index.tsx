import { ChartSection, CoinHero, CoinInfo } from "../../organisms";
import { StyledCoinTemplate } from "./style";
import { Props } from "./types";

const CoinTemplate = ({
  ohlc,
  chartProps,
  coinCredentials,
  coinHeroStats,
  excangeTable,
  handleSelect,
  currency,
}: Props) => {
  return (
    <StyledCoinTemplate>
      <CoinHero
        {...{ coinCredentials, coinHeroStats, currency, handleSelect, ohlc }}
      />
      <ChartSection {...chartProps} />
      <CoinInfo {...excangeTable} />
    </StyledCoinTemplate>
  );
};

export default CoinTemplate;
