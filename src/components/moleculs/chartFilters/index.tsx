import React from "react";
import { Button } from "../../atoms";
import { StyledChartFilters } from "./style";
import uniqid from "uniqid";
import { ChartFilter, OTimePeriod, TTimePeriod } from "../../../types";

type Props = {
  timePeriod: TTimePeriod;
  setTimePeriod: React.Dispatch<React.SetStateAction<TTimePeriod>>;
  chartFilters: ChartFilter[];
};

const ChartFilters = ({ chartFilters, timePeriod, setTimePeriod }: Props) => {
  return (
    <StyledChartFilters>
      {chartFilters.map(({ name, value }) => (
        <Button
          key={uniqid()}
          className={value === timePeriod ? "active-btn" : ""}
          onClick={() => setTimePeriod(value)}
          $type="chartButton"
          content={name}
        />
      ))}
    </StyledChartFilters>
  );
};

export default ChartFilters;
