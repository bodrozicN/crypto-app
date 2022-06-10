import { Heading } from "../../atoms";
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
          <div className="container">
            <Heading type="h4" title="Markets" $isBold />
            <Table type="excanges" {...excangeTable} />
          </div>
        </div>
      </div>
    </StyledCoinTemplate>
  );
};

export default CoinTemplate;
