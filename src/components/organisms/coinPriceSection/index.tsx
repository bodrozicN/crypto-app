import React, { useEffect } from "react";
import { StyledOhlc } from "./style";
import { Stat, PriceLine } from "../../moleculs";
import { Heading } from "../../atoms";
import { numberFormatter } from "../../../helpers";
import { TCurrency, CoinOHLC } from "../../../types";

type Props = {
  ohlc: CoinOHLC;
  currency: TCurrency;
};

const CoinPriceSection = ({ currency, ohlc }: Props) => {
  const { low, high, close } = ohlc;
  const [curr, lowPrice] = numberFormatter(low, currency);
  const [, highPrice] = numberFormatter(high, currency);
  const closePrice = numberFormatter(close, currency);

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
    <StyledOhlc $percentage={fillPercentage}>
      <div>
        <Stat title="Low" value={lowPrice} char={curr} />
        <Stat title="High" value={highPrice} char={curr} />
      </div>
      <PriceLine $percentage={fillPercentage} />
      <Heading type="h1" title={closePrice} $isBold />
    </StyledOhlc>
  );
};

export default CoinPriceSection;
