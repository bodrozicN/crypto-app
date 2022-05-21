import Stat from ".";
import { render, screen } from "@testing-library/react";

describe("Stat", () => {
  it("renders without crashing", () => {
    render(<Stat title="price" value={150000} char="$" />);
    const stat = screen.getByRole("stat");
    expect(stat).toBeInTheDocument();
  });

  it("should have correct children", () => {
    render(<Stat title="price" value={150000} char="$" />);
    const heading = screen.getAllByRole("span");
    expect(heading).toHaveLength(3);
  });
});
