import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  coinPageChartDataFormatter,
  chartFilters,
  excangesTableHead,
} from "../../../helpers";
import { useFilters } from "../../../hooks";
import {
  useGetCoinPriceHistoryQuery,
  useGetCoinQuery,
  useGetCoinOhlcQuery,
  useGetCoinExcangesQuery,
} from "../../../redux/api";
import { OTimePeriod, TTimePeriod } from "../../../types";
import { CoinHero, Header, ChartSection, CoinInfo } from "../../organisms";
import { Wrapper } from "./style";

const Coin = () => {
  const { currency, handleSelect } = useFilters();
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState<TTimePeriod>(OTimePeriod.daily);

  const { coinDetails } = useGetCoinQuery(
    { currency, uuid },
    {
      selectFromResult: ({ data }) => ({
        coinDetails: data?.data.coin,
      }),
    }
  );

  const { priceHistory } = useGetCoinPriceHistoryQuery(
    {
      currency,
      timePeriod,
      uuid,
    },
    {
      selectFromResult: ({ data }) => ({
        priceHistory: coinPageChartDataFormatter(data?.data.history),
      }),
    }
  );

  const { coinOhlc } = useGetCoinOhlcQuery(
    {
      currency,
      uuid,
    },
    {
      selectFromResult: ({ data }) => ({
        coinOhlc: data?.data.ohlc,
      }),
    }
  );

  const { excanges } = useGetCoinExcangesQuery(
    {
      currency,
      uuid,
    },
    {
      selectFromResult: ({ data }) => ({
        excanges: data?.data.exchanges,
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
    priceHistory,
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
