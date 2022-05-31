import React from "react";
import { useGetCoinDetailsQuery } from "../../../redux/api";
import { OCurrency } from "../../../types";

const Coin = () => {
  const { currentData } = useGetCoinDetailsQuery({
    currency: OCurrency.usd,
    timePeriod: "24h",
    uuid: "Qwsogvtv82FCd",
  });

  return <div>Coin</div>;
};

export default Coin;
