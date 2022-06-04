import { TTimePeriod } from "./timePeriod";

export type ChratProps = {
  labels: unknown[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

export type ChartFilter = {
  name: string;
  value: TTimePeriod;
};
