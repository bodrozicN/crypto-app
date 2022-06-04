import { ChartFilter, OTimePeriod } from "../../types";

export const chartFilters: ChartFilter[] = [
  { name: "1D", value: OTimePeriod.daily },
  { name: "7D", value: OTimePeriod.weekly },
  { name: "1M", value: OTimePeriod.monthly },
  { name: "YTD", value: OTimePeriod.yearly },
];
