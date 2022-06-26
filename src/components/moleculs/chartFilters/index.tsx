import React from "react";
import { Button } from "../../atoms";
import { Wrapper } from "./style";
import uniqid from "uniqid";
import { ChartFilter, TTimePeriod } from "../../../types";

type Props = {
  timePeriod: TTimePeriod;
  handleSetTimePeriod: (time: TTimePeriod) => void;
  chartFilters: ChartFilter[];
};

const ChartFilters = ({
  chartFilters,
  timePeriod,
  handleSetTimePeriod,
}: Props) => {
  return (
    <Wrapper>
      {chartFilters.map(({ name, value }) => (
        <Button
          key={uniqid()}
          className={value === timePeriod ? "active-btn" : ""}
          onClick={() => handleSetTimePeriod(value)}
          $type="chartButton"
          content={name}
        />
      ))}
    </Wrapper>
  );
};

export default ChartFilters;
