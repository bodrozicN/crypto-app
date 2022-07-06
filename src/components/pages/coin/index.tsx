import React, { useCallback, useState } from "react";
import { CoinTemplate } from "../../templates";
import { useFilters } from "../../../hooks";
import { useParams } from "react-router-dom";
//prettier-ignore
import { 
  CoinChartSectionProps, CoinCredentials, ExcangesTableProps, CoinHeroStats,
  CoinOHLC, OTimePeriod, TTimePeriod,
} from "../../../types";
//prettier-ignore
import {
  useGetCoinExcangesQuery, useGetCoinOhlcQuery, useGetCoinPriceHistoryQuery,
  useGetCoinQuery, useGetCoinSupplyQuery,
} from "../../../redux/api";
import {
  coinPageChartDataFormatter,
  excangesTableHead,
  chartFilters,
} from "../../../helpers";

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

  const { coinSupply } = useGetCoinSupplyQuery(
    { uuid },
    {
      selectFromResult: ({ data }) => ({
        coinSupply: data?.data.supply,
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

  const handleSetTimePeriod = useCallback((time: TTimePeriod) => {
    setTimePeriod(time);
  }, []);

  const ohlc: CoinOHLC = {
    low: coinOhlc && coinOhlc[0]?.low,
    high: coinOhlc && coinOhlc[0]?.high,
    close: coinOhlc && coinOhlc[0]?.close,
  };

  const chartProps: CoinChartSectionProps = {
    timePeriod,
    handleSetTimePeriod,
    priceHistory,
    chartFilters,
  };

  const excangeTable: ExcangesTableProps = {
    excanges,
    currency,
    tableHead: excangesTableHead,
  };

  const coinCredentials: CoinCredentials = {
    name: coinDetails?.name,
    symbol: coinDetails?.symbol,
    iconUrl: coinDetails?.iconUrl,
    rank: coinDetails?.rank,
  };

  const coinHeroStats: CoinHeroStats = {
    "24hVolume": coinDetails?.["24hVolume"],
    change: coinDetails?.change,
    listedAt: coinDetails?.listedAt,
    marketCap: coinDetails?.marketCap,
    numberOfExchanges: coinDetails?.numberOfExchanges,
    numberOfMarkets: coinDetails?.numberOfMarkets,
    symbol: coinDetails?.symbol,
    websiteUrl: coinDetails?.websiteUrl,
    name: coinDetails?.name,
  };

  return (
    <CoinTemplate
      {...{
        ohlc,
        chartProps,
        excangeTable,
        coinSupply,
        coinCredentials,
        coinHeroStats,
        handleSelect,
        currency,
        ath: coinDetails?.allTimeHigh,
      }}
    />
  );
};

export default Coin;
