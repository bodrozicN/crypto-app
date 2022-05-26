import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer, Table, Header } from "../../organisms";
import { useTheme, useFilters } from "../../../hooks";

const Home = () => {
  const { changeTheme } = useTheme();
  const { handleSelect, ...props } = useFilters();

  // do memoization here
  const { coins, stats } = useGetCoinsListAndMarketDataQuery(
    { ...props, offset: 0 },
    {
      selectFromResult: ({ data }) => ({
        stats: data?.data.stats,
        coins: data?.data.coins,
      }),
    }
  );

  const heroProps = {
    stats,
    changeTheme,
    handleSelect,
    currency: props.currency,
  };

  const tableProps = {
    coinsArr: coins,
    currency: props.currency,
  };

  return (
    <>
      <Header />
      <HomeHero heroProps={heroProps} />
      <FiltersContainer handleSelect={handleSelect} />
      <Table {...tableProps} />
    </>
  );
};

export default React.memo(Home);
