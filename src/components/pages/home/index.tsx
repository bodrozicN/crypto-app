import React from "react";
import { HomeHero, FiltersContainer, CoinsTable } from "../../organisms";
import { Header } from "../../organisms";
import { Wrapper } from "./style";
import { useHomeLogic } from "./useHomeLogic";

const Home = () => {
  const { coinTableHead, handleSelect, heroProps, tableProps, isError } =
    useHomeLogic();

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
