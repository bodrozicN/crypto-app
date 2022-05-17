import HeroHeading from ".";
import { screen, render } from "@testing-library/react";

describe("Heroheading", () => {
  it("should appear on screen", () => {
    render(<HeroHeading value1="Crypto" value2="App" />);
    const heroHeading = screen.getByRole("heroheading");
    expect(heroHeading).toBeInTheDocument();
  });

  it("should have correct childs", () => {
    render(<HeroHeading value1="Crypto" value2="App" />);
    expect(screen.getAllByRole("heading")).toHaveLength(2);
  });

  it("should have correct style", () => {
    render(<HeroHeading value1="Crypto" value2="App" />);
    const heroHeading = screen.getByRole("heroheading");
    expect(heroHeading).toHaveStyle({
      display: "flex",
      alignItems: "center",
    });
  });
});
