import Nav from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const returnComponent = () => (
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
);
describe("Nav", () => {
  it("should render", () => {
    render(returnComponent());
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("should render two link", () => {
    render(returnComponent());
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
