import React from "react";
import { FiltersContainer, HomeHero, Table, Pagination } from "../../organisms";
import { StyledHomeTemplate } from "./style";
import { Props } from "./types";

const HomeTemplate = (props: Props) => {
  const { heroProps, tableProps, isError, paginationProps } = props;

  if (isError) {
    //toDo: add error component
    return <>Error occured</>;
  }

  return (
    <StyledHomeTemplate>
      <HomeHero {...heroProps} />
      <FiltersContainer
        handleSelect={heroProps.handleSelectFilters}
        handleSelectLimit={heroProps.handleSelectLimit}
      />

      <Table type="coins" {...tableProps} />
      <Pagination {...paginationProps} />
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
