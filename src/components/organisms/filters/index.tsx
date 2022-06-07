import React from "react";
import { Filter } from "../../moleculs";
import { StyledFilters } from "./style";
import { OFIlter, TFilter } from "../../../types";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filters = ({ handleSelect }: Props) => {
  return (
    <StyledFilters>
      {Object.values(OFIlter).reduce((acc: JSX.Element[], filter: TFilter) => {
        filter !== OFIlter.currency &&
          acc.push(
            <Filter key={filter} type={filter} onChange={handleSelect} />
          );

        return acc;
      }, [])}
    </StyledFilters>
  );
};

export default Filters;
