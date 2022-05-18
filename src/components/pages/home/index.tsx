import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer } from "../../organisms";
import { OCurrency } from "../../../types";

const Home = () => {
  const { currentData } = useGetCoinsListAndMarketDataQuery({
    currency: OCurrency.btc,
    limit: 100,
    offset: 0,
    orderBy: "marketCap",
    orderDirection: "desc",
    timePeriod: "1y",
  });

  if (!currentData) return null;

  const stats = currentData.data.stats;

  return (
    <>
      <HomeHero {...stats} />
      <FiltersContainer />
    </>
  );
};

export default Home;
