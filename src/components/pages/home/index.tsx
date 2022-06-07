import React from "react";
import { HomeTemplate } from "../../templates";
import { useFilters } from "../../../hooks";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { coinTableHead } from "../../../helpers";
import { CoinsTableProps, HomeHeroProps } from "../../../types";

const Home = () => {
  const { handleSelect, ...props } = useFilters();
  const { coins, stats, isError } = useGetCoinsListAndMarketDataQuery(
    { ...props, offset: 0 },
    {
      selectFromResult: ({ data, isError }) => ({
        stats: data?.data.stats,
        coins: data?.data.coins,
        isError,
      }),
    }
  );

  const heroProps: HomeHeroProps = {
    stats,
    handleSelect,
    currency: props.currency,
  };

  const tableProps: CoinsTableProps = {
    coinsArr: coins,
    currency: props.currency,
    theadContent: coinTableHead,
  };

  return <HomeTemplate {...{ heroProps, tableProps, isError }} />;
};

export default React.memo(Home);
