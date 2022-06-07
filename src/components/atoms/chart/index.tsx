import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChratProps } from "../../../types";
import { Wrapper } from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    x: {
      display: false,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

export const homeChartOptions = {
  ...options,
  scales: {
    ...options.scales,
    y: {
      display: false,
    },
  },
};

export const coinChartOptions = {
  ...options,
};

type Props = {
  type: "homePageChart" | "coinPageChart";
  priceHistory: ChratProps;
};

const Chart = ({ priceHistory, type }: Props) => {
  const options =
    type === "coinPageChart" ? coinChartOptions : homeChartOptions;

  return (
    <Wrapper $type={type}>
      <Line options={options} data={priceHistory} />
    </Wrapper>
  );
};

export default Chart;
