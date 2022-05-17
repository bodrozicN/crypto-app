import React from "react";
import { Select, Span } from "../../atoms";
import { StyledFilter } from "./style";

type Props = {
  type: "heroFilter" | "bodyFilter";
};

const Filter = (props: Props) => {
  switch (props.type) {
    case "heroFilter":
      return (
        <StyledFilter role="filter">
          <Span type="heroLabel" title="Currency" />
          <Select type="currencySelect" onChange={(e) => {}} />
        </StyledFilter>
      );
    case "bodyFilter":
      return <StyledFilter role="filter"></StyledFilter>;
    default:
      throw new Error("Unknown filter type");
  }
};

export default Filter;
