import React from "react";
import { FiltersContainer, HomeHero, Table } from "../../organisms";
import { StyledHomeTemplate } from "./style";
import { Props } from "./types";

const HomeTemplate = (props: Props) => {
  const { heroProps, tableProps, isError } = props;

  if (isError) {
    //toDo: add error component
    return <div>Error occured</div>;
  }

  return (
    <StyledHomeTemplate>
      <HomeHero {...heroProps} />
      <FiltersContainer handleSelect={heroProps.handleSelect} />
      <Table type="coins" {...tableProps} />
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
