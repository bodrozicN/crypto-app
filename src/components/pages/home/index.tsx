import React from "react";
import { HomeHero, FiltersContainer, CoinsTable } from "../../organisms";
import { useHomeLogic } from "./useHomeLogic";

const Home = () => {
  const { coinTableHead, handleSelect, heroProps, tableProps, isError } =
    useHomeLogic();

  return (
    <>
      <HomeHero heroProps={heroProps} />
      <FiltersContainer handleSelect={handleSelect} />
      <CoinsTable tHeadContent={coinTableHead} {...tableProps} />
    </>
  );
};

export default React.memo(Home);
