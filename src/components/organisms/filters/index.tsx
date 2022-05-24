import React from "react";
import { Filter } from "../../moleculs";
import { StyledFilters } from "./style";
import { OFIlter } from "../../../types";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filters = ({ handleSelect }: Props) => {
  return (
    <StyledFilters role="filters">
      <Filter onChange={handleSelect} type={OFIlter.sortBy} />
      <Filter onChange={handleSelect} type={OFIlter.order} />
      <Filter onChange={handleSelect} type={OFIlter.period} />
      <Filter onChange={handleSelect} type={OFIlter.rows} />
    </StyledFilters>
  );
};

export default Filters;
