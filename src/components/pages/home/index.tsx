import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer, Table } from "../../organisms";
import { useFilters } from "../../../hooks";

const Home = () => {
  const { handleSelect, ...props } = useFilters();

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
    handleSelect,
    currency: props.currency,
  };

  const tableProps = {
    coinsArr: coins,
    currency: props.currency,
  };

  return (
    <>
      <HomeHero heroProps={heroProps} />
      <FiltersContainer handleSelect={handleSelect} />
      <Table {...tableProps} />
    </>
  );
};

export default React.memo(Home);
