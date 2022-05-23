import { chartDataFormatter } from "./chartDataFormatter";

test("should return correct data for chart", () => {
  expect(chartDataFormatter(["1", "2", "3", "4", "5"])).toMatchObject({
    labels: ["1", "2", "3", "4", "5"].map((_, i) => i),
    datasets: [
      {
        label: "Dataset 1",
        data: ["1", "2", "3", "4", "5"].map((price) => +price),
        borderColor: "#20ff6c",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
});
