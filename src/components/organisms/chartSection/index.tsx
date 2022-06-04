import React from "react";
import { ChartFilter, ChratProps, TTimePeriod } from "../../../types";
import { Chart, Heading } from "../../atoms";
import { ChartFilters } from "../../moleculs";
import { StyledChartSection } from "./style";

type Props = {
  timePeriod: TTimePeriod;
  setTimePeriod: React.Dispatch<React.SetStateAction<TTimePeriod>>;
  name: string | undefined;
  priceHistory: ChratProps | null;
  chartFilters: ChartFilter[];
};

const ChartSection = (props: Props) => {
  return (
    <StyledChartSection>
      <div>
        {props.name ? (
          <Heading type="h4" title={`${props.name} Price Chart`} $isBold />
        ) : (
          <div></div>
        )}
        <ChartFilters {...props} />
      </div>
      {props.priceHistory && (
        <Chart type="coinPageChart" priceHistory={props.priceHistory} />
      )}
    </StyledChartSection>
  );
};

export default ChartSection;
