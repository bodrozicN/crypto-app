import { CoinTemplate } from "../../templates";
import { useFilters } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  CoinChartSectionProps,
  CoinCredentials,
  CoinExcanges,
  CoinHeroStats,
  CoinOHLC,
  OTimePeriod,
  TTimePeriod,
} from "../../../types";
import {
  useGetCoinExcangesQuery,
  useGetCoinOhlcQuery,
  useGetCoinPriceHistoryQuery,
  useGetCoinQuery,
  useGetCoinSupplyQuery,
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

  const ohlc: CoinOHLC = useMemo(
    () => ({
      low: coinOhlc && coinOhlc[0]?.low,
      high: coinOhlc && coinOhlc[0]?.high,
      close: coinOhlc && coinOhlc[0]?.close,
    }),
    [coinOhlc]
  );

  const chartProps: CoinChartSectionProps = {
    timePeriod,
    setTimePeriod,
    name: coinDetails?.name,
    priceHistory,
    chartFilters,
  };

  const excangeTable: CoinExcanges = useMemo(
    () => ({
      excanges,
      currency,
      tableHead: excangesTableHead,
    }),
    [currency, excanges]
  );

  const coinCredentials: CoinCredentials = useMemo(
    () => ({
      name: coinDetails?.name,
      symbol: coinDetails?.symbol,
      iconUrl: coinDetails?.iconUrl,
      rank: coinDetails?.rank,
    }),
    [coinDetails]
  );

  const coinHeroStats: CoinHeroStats = useMemo(
    () => ({
      "24hVolume": coinDetails?.["24hVolume"],
      change: coinDetails?.change,
      listedAt: coinDetails?.listedAt,
      marketCap: coinDetails?.marketCap,
      numberOfExchanges: coinDetails?.numberOfExchanges,
      numberOfMarkets: coinDetails?.numberOfMarkets,
      symbol: coinDetails?.symbol,
      websiteUrl: coinDetails?.websiteUrl,
      name: coinDetails?.name,
    }),
    [coinDetails]
  );

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
