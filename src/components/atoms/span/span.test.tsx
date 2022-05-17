import Span from ".";
import { screen, render } from "@testing-library/react";

describe("Span", () => {
  it("should render the span", () => {
    render(<Span type="heroLabel" title="Test" />);
    expect(screen.getByRole("span")).toBeInTheDocument();
  });
});
