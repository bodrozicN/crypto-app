import React from "react";
import { Select, Span } from "../../atoms";
import { StyledFilter } from "./style";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type:
    | "currencyFilter"
    | "orderDirFilter"
    | "orderByFilter"
    | "limitFilter"
    | "timePeriodFilter";
};

const Filter = (props: Props) => {
  switch (props.type) {
    case "currencyFilter":
      return (
        <StyledFilter role="filter">
          <Span type="heroLabel" title="Currency" />
          <Select type="currencySelect" onChange={props.onChange} />
        </StyledFilter>
      );
    case "limitFilter":
      return (
        <StyledFilter role="filter">
          <Span type="filterLabel" title="Rows" />
          <Select type="limitSelect" onChange={props.onChange} />
        </StyledFilter>
      );
    case "orderByFilter":
      return (
        <StyledFilter role="filter">
          <Span type="filterLabel" title="Sort by" />
          <Select type="orderBySelect" onChange={props.onChange} />
        </StyledFilter>
      );
    case "orderDirFilter":
      return (
        <StyledFilter role="filter">
          <Span type="filterLabel" title="Order" />
          <Select type="orderDirectionSelect" onChange={props.onChange} />
        </StyledFilter>
      );
    case "timePeriodFilter":
      return (
        <StyledFilter role="filter">
          <Span type="filterLabel" title="Period" />
          <Select type="timePeriodSelect" onChange={props.onChange} />
        </StyledFilter>
      );
    default:
      throw new Error("Unknown filter type");
  }
};

export default Filter;
