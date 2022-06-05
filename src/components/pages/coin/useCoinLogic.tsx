import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  coinPageChartDataFormatter,
  chartFilters,
  excangesTableHead,
} from "../../../helpers";
import { useFilters } from "../../../hooks";
import {
  useGetCoinExcangesQuery,
  useGetCoinOhlcQuery,
  useGetCoinPriceHistoryQuery,
  useGetCoinQuery,
} from "../../../redux/api";
import { OTimePeriod, TTimePeriod } from "../../../types";

export const useCoinLogic = () => {
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

  const coinHeroProps = {
    coinDetails,
    handleSelect,
    currency,
    ohlc,
  };

  const coinInfoProps = {
    excanges,
    theadContent: excangesTableHead,
  };

  return {
    chartSectionProps,
    coinHeroProps,
    coinInfoProps,
  };
};
