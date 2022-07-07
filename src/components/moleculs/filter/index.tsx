import React from "react";
import { Select, Span, OSpan } from "../../atoms";
import { Wrapper } from "./style";
import { TFilter, OFIlter } from "../../../types";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: TFilter;
};

const Filter = (props: Props) => {
  // if it is 'currency' type, then we need to show the heroPrimary span element, otherwise, we need to show the filter span element
  const spanType =
    props.type === OFIlter.currency ? OSpan.heroPrimary : OSpan.filterLabel;

  return (
    <Wrapper>
      <Span $type={spanType} content={props.type} />
      <Select type={props.type} onChange={props.onChange} />
    </Wrapper>
  );
};

export default Filter;
