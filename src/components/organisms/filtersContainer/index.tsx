import React from "react";
import { Wrapper } from "./style";
import { Filters } from "../../organisms";
import { Nav } from "../../moleculs";

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FiltersContainer = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <Nav />
        <Filters {...props} />
      </div>
    </Wrapper>
  );
};

export default React.memo(
  FiltersContainer,
  (prev, next) =>
    prev.handleSelect === next.handleSelect &&
    prev.handleSelectLimit === next.handleSelectLimit
);
