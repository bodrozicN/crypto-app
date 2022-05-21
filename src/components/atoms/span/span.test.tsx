import { Span, OSpan } from ".";
import { render, screen } from "@testing-library/react";
import { OFontWeight } from "../../../types";

describe("Span", () => {
  it("should render", () => {
    render(<Span type={OSpan.heroPrimary} content="Span" />);
    const span = screen.getByRole("span");
    expect(span).toBeInTheDocument();
  });

  it("Should have correct style", () => {
    render(<Span type={OSpan.heroPrimary} content="Span" />);
    const span = screen.getByRole("span");
    expect(span).toHaveStyle({
      fontSize: "1.4rem",
      color: "var(--white)",
      cursor: "default",
      fontWeight: `${OFontWeight.light}`,
    });
  });
});
