import { ChratProps } from "../../types";

export function format<T, K extends keyof T>(arr: T[]) {
  if (!arr) return null;
}

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

export function coinPageChartDataFormatter(
  arr: PriceHistory[] | undefined
): ChratProps | null {
  if (!arr) return null;
  const reversedArray = [...arr].reverse();
  const color =
    reversedArray[0] > reversedArray[reversedArray.length - 1]
      ? "#ff4747"
      : "#20ff6c";
  return {
    labels: reversedArray.map(({ timestamp }) => timestamp),
    datasets: [
      {
        label: "Dataset 1",
        data: reversedArray.map(({ price }) => +price),
        borderColor: color,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
}
