import Stat from ".";
import { screen, render } from "@testing-library/react";

describe("Stat", () => {
  it("Expect to render Stat", () => {
    render(<Stat title="title" value={10} />);
    const statEl = screen.getByRole("stat");
    expect(statEl).toBeInTheDocument();
  });
  it("Expect to render Stat with out char", () => {
    render(<Stat title="title" value={10} />);
    const spanEl = screen.getAllByRole("span");
    expect(spanEl).toHaveLength(2);
  });
  it("Expect to render Stat with char", () => {
    render(<Stat title="title" value={10} char="$" />);
    const spanEl = screen.getAllByRole("span");
    expect(spanEl).toHaveLength(3);
  });
});
