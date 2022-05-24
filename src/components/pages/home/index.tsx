import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer, Table } from "../../organisms";
import { useTheme, useFilters } from "../../../hooks";

const Home = () => {
  const { changeTheme } = useTheme();
  const { handleSelect, ...props } = useFilters();
  const { currentData } = useGetCoinsListAndMarketDataQuery({
    ...props,
    offset: 0,
  });

  if (!currentData) return null;

  const stats = currentData.data.stats;

  const heroProps = {
    stats,
    changeTheme,
    handleSelect,
    currency: props.currency,
  };

  const tableProps = {
    coinsArr: currentData?.data.coins,
    currency: props.currency,
  };

  return (
    <>
      <HomeHero {...heroProps} />
      <FiltersContainer handleSelect={handleSelect} />
      <Table {...tableProps} />
    </>
  );
};

export default Home;
