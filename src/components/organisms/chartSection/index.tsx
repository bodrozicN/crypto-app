import React from "react";
import { ChartFilter, ChratProps, TTimePeriod } from "../../../types";
import { Chart, Heading } from "../../atoms";
import { ChartFilters } from "../../moleculs";
import { Wrapper } from "./style";

type Props = {
  timePeriod: TTimePeriod;
  handleSetTimePeriod: (time: TTimePeriod) => void;
  name: string | undefined;
  priceHistory: ChratProps | null;
  chartFilters: ChartFilter[];
};

const ChartSection = (props: Props) => {
  return (
    <Wrapper>
      <div>
        {props.name ? (
          <Heading type="h4" title={`${props.name} Price Chart`} $isBold />
        ) : null}
        <ChartFilters {...props} />
      </div>
      {props.priceHistory && (
        <Chart type="coinPageChart" priceHistory={props.priceHistory} />
      )}
    </Wrapper>
  );
};

export default ChartSection;
