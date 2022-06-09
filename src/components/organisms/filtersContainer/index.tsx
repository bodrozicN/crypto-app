import React from "react";
import { StyledFiltersContainer } from "./style";
import { Filters } from "../../organisms";
import { Nav } from "../../moleculs";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FiltersContainer = (props: Props) => {
  return (
    <StyledFiltersContainer>
      <div>
        <Nav />
        <Filters {...props} />
      </div>
    </StyledFiltersContainer>
  );
};

export default FiltersContainer;
