import HomeHero from "./";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { IStats } from "../../../../interfaces";

const stats: IStats = {
  total24hVolume: "123456",
  totalCoins: 123,
  totalExchanges: 12222,
  totalMarketCap: "45545424",
  totalMarkets: 12121,
  total: 123456789,
};

const props = {
  stats,
  changeTheme: jest.fn(),
};

const Component = () => (
  <BrowserRouter>
    <HomeHero {...props} />
  </BrowserRouter>
);

describe("HomeHero", () => {
  it("should render correctly", () => {
    render(<Component />);
    const hero = screen.getByRole("homeHero");
    expect(hero).toBeInTheDocument();
  });

  it("should have correct children", () => {
    render(<Component />);
    expect(screen.getByRole("heroheading")).toBeInTheDocument();
    expect(screen.getByRole("stats")).toBeInTheDocument();
    expect(screen.getByRole("heroSvg")).toBeInTheDocument();
  });
});
