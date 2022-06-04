import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  coinPageChartDataFormatter,
  chartFilters,
  excangesTableHead,
} from "../../../helpers";
import { useFilters } from "../../../hooks";
import { useGetCoinDetailsQuery } from "../../../redux/api";
import { OTimePeriod, TTimePeriod } from "../../../types";
import { CoinHero, Header, ChartSection, CoinInfo } from "../../organisms";
import { Wrapper } from "./style";

const Coin = () => {
  const { currency, handleSelect } = useFilters();
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState<TTimePeriod>(OTimePeriod.daily);
  const { coinDetails, coinOhlc, priceHistory, excanges } =
    useGetCoinDetailsQuery(
      { currency, timePeriod, uuid },
      {
        selectFromResult: ({ currentData }) => ({
          coinDetails: currentData?.coinDetails.data.coin,
          coinOhlc: currentData?.coinOHLC.data.ohlc,
          priceHistory: currentData?.coinPriceHistory.data.history,
          excanges: currentData?.coinExcanges.data.exchanges,
        }),
      }
    );

  const ohlc = {
    low: coinOhlc && coinOhlc[0]?.low,
    high: coinOhlc && coinOhlc[0]?.high,
    close: coinOhlc && coinOhlc[0]?.close,
  };

  const chartSectionProps = {
    timePeriod,
    setTimePeriod,
    name: coinDetails?.name,
    priceHistory: coinPageChartDataFormatter(priceHistory),
    chartFilters,
  };

  return (
    <>
      <Wrapper>
        <Header />
        <CoinHero {...{ coinDetails, handleSelect, currency, ohlc }} />
      </Wrapper>
      <ChartSection {...chartSectionProps} />
      <CoinInfo theadContent={excangesTableHead} excanges={excanges} />
    </>
  );
};

export default Coin;
