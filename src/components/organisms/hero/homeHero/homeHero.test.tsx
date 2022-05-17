import { screen, render } from "@testing-library/react";
import HomeHero from ".";

const returnHomeHero = () => (
  <HomeHero
    total={1}
    total24hVolume="5"
    totalCoins={12}
    totalExchanges={122}
    totalMarketCap="121212"
    totalMarkets={12000}
  />
);

describe("HomeHero", () => {
  it("Should appear on screen", () => {
    render(returnHomeHero());
    const homeHero = screen.getByRole("homeHero");
    expect(homeHero).toBeInTheDocument();
  });

  it("Should have correct style", () => {
    render(returnHomeHero());
    expect(screen.getByRole("heroheading")).toBeInTheDocument();
    expect(screen.getByRole("stats")).toBeInTheDocument();
  });
});
