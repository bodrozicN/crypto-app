export function chartDataFormatter(sparkline: string[]) {
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
