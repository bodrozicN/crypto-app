import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FiltersContainer from "./";

const Component = () => (
  <BrowserRouter>
    <FiltersContainer handleSelect={jest.fn} />
  </BrowserRouter>
);

describe("Filters", () => {
  it("Should render", () => {
    render(<Component />);
    expect(screen.getByRole("filtersContainer")).toBeInTheDocument();
  });
});
