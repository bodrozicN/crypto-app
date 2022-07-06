import React from "react";
import { ChartFilter, ChratProps, TTimePeriod } from "../../../types";
import { Chart, Heading } from "../../atoms";
import { ChartFilters } from "../../moleculs";
import { Wrapper } from "./style";

type Props = {
  timePeriod: TTimePeriod;
  handleSetTimePeriod: (time: TTimePeriod) => void;
  priceHistory: ChratProps | null;
  chartFilters: ChartFilter[];
};

const ChartSection = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <Heading type="h4" title="Price Chart" $isBold />
        <ChartFilters {...props} />
      </div>
      {props.priceHistory && (
        <Chart type="coinPageChart" priceHistory={props.priceHistory} />
      )}
    </Wrapper>
  );
};

export default ChartSection;
