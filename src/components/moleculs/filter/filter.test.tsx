import { screen, render } from "@testing-library/react";
import Filter from ".";

describe("Filter", () => {
  it("Should appear on screen", () => {
    const onChange = jest.fn();
    render(<Filter onChange={onChange} type="currencyFilter" />);
    const select = screen.getByRole("filter");
    expect(select).toBeInTheDocument();
  });

  it("Should have children", () => {
    const onChange = jest.fn();
    render(<Filter onChange={onChange} type="currencyFilter" />);
    const span = screen.getByRole("span");
    expect(span).toBeInTheDocument();
    const select = screen.getByRole("select");
    expect(select).toBeInTheDocument();
  });
});
