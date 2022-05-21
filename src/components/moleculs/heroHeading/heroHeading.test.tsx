import { screen, render } from "@testing-library/react";
import HeroHeading from "./";

it("should render heroheading", () => {
  render(<HeroHeading value1="Crypto" value2="App" />);
  expect(screen.getByRole("heroheading")).toBeInTheDocument();
});

it("should have correct children", () => {
  render(<HeroHeading value1="Crypto" value2="App" />);
  const heading = screen.getAllByRole("heading");
  expect(heading).toHaveLength(2);
});
