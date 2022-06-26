import React from "react";
import { Filter } from "../../moleculs";
import { Wrapper } from "./style";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filters = ({ handleSelect, handleSelectLimit }: Props) => {
  return (
    <Wrapper>
      <Filter type="Rows" onChange={handleSelectLimit} />
      <Filter type="SortBy" onChange={handleSelect} />
      <Filter type="Order" onChange={handleSelect} />
      <Filter type="Period" onChange={handleSelect} />
    </Wrapper>
  );
};

export default Filters;
