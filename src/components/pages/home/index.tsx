import React from "react";
import { HomeHero, FiltersContainer, Table } from "../../organisms";
import { useHomeLogic } from "./useHomeLogic";

const Home = () => {
  const { coinTableHead, handleSelect, heroProps, tableProps, isError } =
    useHomeLogic();

  return (
    <>
      <HomeHero heroProps={heroProps} />
      <FiltersContainer handleSelect={handleSelect} />
      <Table type="coins" theadContent={coinTableHead} {...tableProps} />
    </>
  );
};

export default React.memo(Home);
