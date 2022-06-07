import React from "react";
import { FiltersContainer, HomeHero, Table } from "../../organisms";
import { StyledHomeTemplate } from "./style";
import { Props } from "./types";

const HomeTemplate = (props: Props) => {
  const { heroProps, tableProps, isError } = props;

  if (isError) {
    //toDo: add error component
    return <StyledHomeTemplate>Error occured</StyledHomeTemplate>;
  }

  return (
    <StyledHomeTemplate>
      <div>
        <HomeHero {...heroProps} />
        <FiltersContainer handleSelect={heroProps.handleSelect} />
      </div>
      <Table type="coins" {...tableProps} />
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
