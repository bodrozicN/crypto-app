import Svg from ".";
import { render, screen } from "@testing-library/react";

it("should render the svg", () => {
  render(<Svg type="heroSvg" />);
  expect(screen.getByRole("heroSvg")).toBeInTheDocument();
});
