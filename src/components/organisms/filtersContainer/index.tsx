import React from "react";
import { StyledFiltersContainer } from "./style";
import { Filters } from "../../organisms";
import { Nav } from "../../moleculs";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FiltersContainer = ({ handleSelect }: Props) => {
  return (
    <StyledFiltersContainer role="filtersContainer">
      <div>
        <Nav />
        <Filters handleSelect={handleSelect} />
      </div>
    </StyledFiltersContainer>
  );
};

export default FiltersContainer;
