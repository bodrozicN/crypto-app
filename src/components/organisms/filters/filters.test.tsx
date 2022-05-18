import Filters from ".";

import { screen, render } from "@testing-library/react";

describe("Filters", () => {
  it("should render", () => {
    render(<Filters />);
    expect(screen.getByRole("filters")).toBeInTheDocument();
  });
  it("should contain four filter components", () => {
    render(<Filters />);
    expect(screen.getAllByRole("filter")).toHaveLength(4);
  });
});
