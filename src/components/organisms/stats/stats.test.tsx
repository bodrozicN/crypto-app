import Stats from ".";
import { screen, render } from "@testing-library/react";
import { OCurrency } from "../../../types";

const stats = {
  total: 1,
  total24hVolume: "5",
  totalCoins: 12,
  totalExchanges: 122,
  totalMarketCap: "121212",
  totalMarkets: 12000,
};

const retunStats = () => (
  <Stats currency={OCurrency.usd} stats={stats} handleSelect={jest.fn} />
);

describe("Stats", () => {
  it("Should appear on screen", () => {
    render(retunStats());
    const stats = screen.getByRole("stats");
    expect(stats).toBeInTheDocument();
  });
  it("Should have correct children", () => {
    render(retunStats());
    const statAll = screen.getAllByRole("stat");
    expect(statAll).toHaveLength(5);
    const filter = screen.getByRole("filter");
    expect(filter).toBeInTheDocument();
  });
});
