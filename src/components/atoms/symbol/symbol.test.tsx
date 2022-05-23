import Symbol from ".";
import { render, screen } from "@testing-library/react";

test("renders without crashing", () => {
  render(<Symbol title="BTC" />);
  expect(screen.getByRole("symbol")).toBeInTheDocument();
});
