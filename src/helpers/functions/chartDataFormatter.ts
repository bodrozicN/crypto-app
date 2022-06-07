import { ChratProps } from "../../types";

// Update this code !!!!!

export function chartDataFormatter(sparkline: string[]): ChratProps {
  const color =
    sparkline[0] > sparkline[sparkline.length - 1] ? "#ff4747" : "#20ff6c";
  return {
    labels: sparkline.map((_, i) => i),
    datasets: [
      {
        label: "Dataset 1",
        data: sparkline.map((price) => +price),
        borderColor: color,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
}

type PriceHistory = {
  price: string;
  timestamp: number;
};

export function coinPageChartDataFormatter(arr: PriceHistory[] | undefined) {
  if (!arr) return null;
  const reversedArray = [...arr].reverse();

  const arrPrices = reversedArray.map(({ price }) => +price);
  return {
    labels: reversedArray.map(({ timestamp }) => timestamp),
    datasets: [
      {
        label: "Dataset 1",
        data: arrPrices,
        backgroundColor: [
          "rgba(255,26, 104, 0.2)",
          "rgba(54,162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],

        tension: 0.4,
        borderColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea, data, scales } = chart;
          if (!chartArea) return null;
          return getGradient(ctx, chartArea, data, scales);
        },
      },
    ],
  };
}

function getGradient(ctx: any, chartArea: any, data: any, scales: any) {
  const { left, right, top, width, height, bottom } = chartArea;
  const { x, y } = scales;
  const gradientBorder = ctx.createLinearGradient(0, 0, 0, bottom);
  let shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom;

  if (shift < 0) shift = 0;
  if (shift > 1) shift = 1;

  gradientBorder.addColorStop(0, "#20ff6c");
  gradientBorder.addColorStop(shift, "#20ff6c");
  gradientBorder.addColorStop(shift, "#ff4747");
  gradientBorder.addColorStop(shift, "#ff4747");
  return gradientBorder;
}
