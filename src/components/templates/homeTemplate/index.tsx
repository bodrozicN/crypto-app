import React from "react";
import {
  FiltersContainer,
  HomeHero,
  Table,
  Pagination,
  Error,
} from "../../organisms";
import { StyledHomeTemplate } from "./style";
import { Props } from "./types";

const HomeTemplate = (props: Props) => {
  const { heroProps, tableProps, isError, paginationProps } = props;

  if (isError) {
    //toDo: add error component
    return (
      <Error
        href="#"
        linkTitle="Visit App"
        title="You probbably don't have api key. Please visit following link"
      />
    );
  }

  return (
    <StyledHomeTemplate>
      <HomeHero {...heroProps} />
      <FiltersContainer
        handleSelect={heroProps.handleSelectFilters}
        handleSelectLimit={heroProps.handleSelectLimit}
      />

      {tableProps.coinsArr && (
        <>
          <Table type="coins" {...tableProps} />
          <Pagination {...paginationProps} />
        </>
      )}
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
