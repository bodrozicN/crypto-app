import React, { useEffect, useState } from "react";
import { HomeTemplate } from "../../templates";
import { useFilters, usePagination } from "../../../hooks";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { coinTableHead } from "../../../helpers";
import { CoinsTableProps, HomeHeroProps, Pagination } from "../../../types";

const Home = () => {
  const [numOfCoins, setNumOfCoins] = useState<number | undefined>(undefined);

  const {
    handleChangePage,
    limit,
    offset,
    page,
    lastPage,
    handleSelect: handleSelectLimit,
  } = usePagination(numOfCoins);
  const { handleSelect: handleSelectFilters, ...props } = useFilters();
  const { coins, stats, isError } = useGetCoinsListAndMarketDataQuery(
    { ...props, offset, limit },
    {
      selectFromResult: ({ data, isError }) => ({
        stats: data?.data.stats,
        coins: data?.data.coins,
        isError,
      }),
    }
  );

  useEffect(() => {
    setNumOfCoins(stats?.totalCoins);
  }, [stats]);

  const heroProps: HomeHeroProps = {
    stats,
    handleSelectFilters,
    handleSelectLimit,
    currency: props.currency,
  };

  const tableProps: CoinsTableProps = {
    coinsArr: coins,
    currency: props.currency,
    tableHead: coinTableHead,
  };

  const paginationProps: Pagination = {
    page,
    lastPage,
    handleChangePage,
  };

  return (
    <HomeTemplate {...{ heroProps, tableProps, isError, paginationProps }} />
  );
};

export default React.memo(Home);
