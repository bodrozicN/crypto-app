import Heading from ".";
import { render, screen } from "@testing-library/react";

describe("Heading primary", () => {
  it("should render heading primary", () => {
    render(<Heading title="heading" type="h1" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should have correct style", () => {
    render(<Heading title="heading" type="h1" />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveStyle({
      color: "var(--white)",
      cursor: "default",
      fontSize: "8rem",
    });
  });
});
