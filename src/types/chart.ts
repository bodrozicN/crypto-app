import { TTimePeriod } from "./timePeriod";

export type ChratProps = {
  labels: unknown[];
  datasets: {
    label: string;
    data: number[];
    borderColor: any;
    backgroundColor: any;
  }[];
};

export type ChartFilter = {
  name: string;
  value: TTimePeriod;
};
