import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FiltersContainer from "./";

const returnComponent = () => (
  <BrowserRouter>
    <FiltersContainer />
  </BrowserRouter>
);

describe("Filters", () => {
  it("Should render", () => {
    render(returnComponent());
    expect(screen.getByRole("filtersContainer")).toBeInTheDocument();
  });
});
