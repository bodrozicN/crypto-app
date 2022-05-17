import { screen, render } from "@testing-library/react";
import Filter from ".";

describe("Filter", () => {
  it("Should appear on screen", () => {
    render(<Filter type="heroFilter" />);
    const select = screen.getByRole("filter");
    expect(select).toBeInTheDocument();
  });

  it("Should have correct style", () => {
    render(<Filter type="heroFilter" />);
    const select = screen.getByRole("filter");
    expect(select).toHaveStyle(`
    display: flex;
    flex-direction: column;
    justify-content: space-between;`);
  });

  it("Should have children", () => {
    render(<Filter type="heroFilter" />);
    const span = screen.getByRole("span");
    expect(span).toBeInTheDocument();
    const select = screen.getByRole("select");
    expect(select).toBeInTheDocument();
  });
});
