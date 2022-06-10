import { dateFormatter, numberFormatter } from "../../../helpers";
import { Heading } from "../../atoms";
import { PriceBox } from "../../moleculs";
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
  const athPrice = numberFormatter(ath?.price, "yhjMzLPhuIDl");

  return (
    <StyledCoinTemplate>
      <CoinHero
        {...{ coinCredentials, coinHeroStats, currency, handleSelect, ohlc }}
      />
      <ChartSection {...chartProps} />
      <div>
        <div>
          {coinSupply && ath && (
            <div className="container">
              <Heading type="h4" title="Coin supply" $isBold />
              <CoinSupply {...coinSupply} />
              <PriceBox
                price={`${athPrice[0]} ${athPrice[1]}`}
                date={dateFormatter(ath.timestamp)}
                title="All time high"
              />
            </div>
          )}
          {excangeTable && (
            <div className="container">
              <Heading type="h4" title="Markets" $isBold />
              <Table type="excanges" {...excangeTable} />
            </div>
          )}
        </div>
      </div>
    </StyledCoinTemplate>
  );
};

export default CoinTemplate;
