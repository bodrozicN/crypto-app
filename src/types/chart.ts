import { TTimePeriod } from "./";

export type PriceHistory = {
  price: string;
  timestamp: number;
};

export type ChratProps = {
  labels: unknown[];
  datasets: {
    label: string;
    data: number[];
    borderColor: any;
    backgroundColor: any;
    tension?: number;
  }[];
};

export type ChartFilter = {
  name: string;
  value: TTimePeriod;
};

export type CoinChartSectionProps = {
  timePeriod: TTimePeriod;
  setTimePeriod: React.Dispatch<React.SetStateAction<TTimePeriod>>;
  name: string | undefined;
  priceHistory: ChratProps | null;
  chartFilters: ChartFilter[];
};
