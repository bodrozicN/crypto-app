import React from "react";
import { useParams } from "react-router-dom";
import { useFilters } from "../../../hooks";
import { useGetCoinDetailsQuery } from "../../../redux/api";
import { CoinHero, Header } from "../../organisms";
import { Wrapper } from "./style";

const Coin = () => {
  const { currency, handleSelect } = useFilters();
  const { id } = useParams();

  const { coinDetails, coinOhlc } = useGetCoinDetailsQuery(
    { currency, timePeriod: "24h", uuid: id },
    {
      selectFromResult: ({ currentData }) => ({
        coinDetails: currentData?.coinDetails.data.coin,
        coinOhlc: currentData?.coinOHLC.data.ohlc,
      }),
    }
  );

  const ohlc = {
    low: coinOhlc && coinOhlc[0]?.low,
    high: coinOhlc && coinOhlc[0]?.high,
    close: coinOhlc && coinOhlc[0]?.close,
  };

  return (
    <Wrapper>
      <Header />
      <CoinHero {...{ coinDetails, handleSelect, currency, ohlc }} />
    </Wrapper>
  );
};

export default Coin;
