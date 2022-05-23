import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer, Table } from "../../organisms";
import { OCurrency } from "../../../types";
import { useTheme } from "../../../hooks";
import { ICoinListData } from "../../../interfaces";

const Home = () => {
  const { changeTheme } = useTheme();
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

  const heroProps = {
    stats,
    changeTheme,
  };

  const coinsArr: ICoinListData[] | undefined = currentData?.data.coins;

  return (
    <>
      <HomeHero {...heroProps} />
      <FiltersContainer />
      <Table coinsArr={coinsArr} />
    </>
  );
};

export default Home;
