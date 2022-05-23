import Chart from ".";
import { render, screen } from "@testing-library/react";

const labels = ["January", "February", "March", "April", "May", "June"];

const props = {
  labels,
  datasets: [
    {
      data: labels.map((label) => label.length),
      label: "My First dataset",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

test("renders Chart component", () => {
  render(<Chart {...props} />);
  expect(screen.getByRole("lineChart")).toBeInTheDocument();
});
