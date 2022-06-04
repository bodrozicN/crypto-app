import React from "react";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { HomeHero, FiltersContainer, CoinsTable } from "../../organisms";
import { useFilters } from "../../../hooks";
import { Header } from "../../organisms";
import { Wrapper } from "./style";
import { coinTableHead } from "../../../helpers";

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
      <Wrapper>
        <Header />
        <HomeHero heroProps={heroProps} />
      </Wrapper>
      <FiltersContainer handleSelect={handleSelect} />
      <CoinsTable tHeadContent={coinTableHead} {...tableProps} />
    </>
  );
};

export default React.memo(Home);
