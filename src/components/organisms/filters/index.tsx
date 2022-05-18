import React from "react";
import { Filter } from "../../moleculs";
import { StyledFilters } from "./style";

const Filters = () => {
  return (
    <StyledFilters role="filters">
      <Filter onChange={(e) => {}} type="orderByFilter" />
      <Filter onChange={(e) => {}} type="orderDirFilter" />
      <Filter onChange={(e) => {}} type="timePeriodFilter" />
      <Filter onChange={(e) => {}} type="limitFilter" />
    </StyledFilters>
  );
};

export default Filters;
