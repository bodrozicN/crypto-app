import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { Stat, PriceLine } from "../../moleculs";
import { Heading } from "../../atoms";
import { currencyFormatter } from "../../../helpers";
import { TCurrency, CoinOHLC } from "../../../types";

type Props = {
  ohlc: CoinOHLC;
  currency: TCurrency;
};

const CoinPriceSection = ({ currency, ohlc }: Props) => {
  const { low, high, close } = ohlc;
  const lowPrice = currencyFormatter(low, currency);
  const highPrice = currencyFormatter(high, currency);
  const closePrice = currencyFormatter(close, currency);

  const [fillPercentage, setFillPercentage] = React.useState(0);

  useEffect(() => {
    if (Number(low) > Number(close)) {
      setFillPercentage(0);
    }
    if (Number(low) < Number(close) && Number(high) > Number(close)) {
      setFillPercentage(
        ((Number(close) - Number(low)) / (Number(high) - Number(low))) * 100
      );
    }

    if (Number(high) < Number(close)) {
      setFillPercentage(100);
    }
  }, [close, high, low]);

  return (
    <Wrapper $percentage={fillPercentage}>
      <div>
        <Stat
          title="Low"
          value={lowPrice[0] && `${lowPrice[0]} ${lowPrice[1]}`}
        />
        <Stat
          title="High"
          value={highPrice[0] && `${highPrice[0]} ${highPrice[1]}`}
        />
      </div>
      <PriceLine $percentage={fillPercentage} />
      <Heading type="h1" title={closePrice} $isBold />
    </Wrapper>
  );
};

export default CoinPriceSection;
