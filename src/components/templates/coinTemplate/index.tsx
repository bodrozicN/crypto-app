import { ChartSection, CoinHero, CoinSupply, Table } from "../../organisms";
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
  coinSupply,
  ath,
}: Props) => {
  return (
    <StyledCoinTemplate>
      <CoinHero
        {...{ coinCredentials, coinHeroStats, currency, handleSelect, ohlc }}
      />
      <ChartSection {...chartProps} />
      <div>
        <div>
          {coinSupply && ath && <CoinSupply {...{ ath, coinSupply }} />}
          <Table type="excanges" {...excangeTable} />
        </div>
      </div>
    </StyledCoinTemplate>
  );
};

export default CoinTemplate;
