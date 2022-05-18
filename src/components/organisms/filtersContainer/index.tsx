import React from "react";
import { StyledFiltersContainer } from "./style";
import { Filters } from "../../organisms";
import { Nav } from "../../moleculs";

const FiltersContainer = () => {
  return (
    <StyledFiltersContainer role="filtersContainer">
      <div>
        <Nav />
        <Filters />
      </div>
    </StyledFiltersContainer>
  );
};

export default FiltersContainer;
