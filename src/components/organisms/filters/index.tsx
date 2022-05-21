import React from "react";
import { Filter } from "../../moleculs";
import { StyledFilters } from "./style";
import { OFIlter } from "../../../types";

const Filters = () => {
  return (
    <StyledFilters role="filters">
      <Filter onChange={(e) => {}} type={OFIlter.sortBy} />
      <Filter onChange={(e) => {}} type={OFIlter.order} />
      <Filter onChange={(e) => {}} type={OFIlter.period} />
      <Filter onChange={(e) => {}} type={OFIlter.rows} />
    </StyledFilters>
  );
};

export default Filters;
