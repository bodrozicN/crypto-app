import Heading from ".";
import { render, screen } from "@testing-library/react";
import { OFontWeight } from "../../../types";

describe("Heading", () => {
  it("heading primary should appear", () => {
    render(
      <Heading title="HeadingPrimary" type="h1" weight={OFontWeight.light} />
    );
    const headingPrimary = screen.getByRole("heading", {
      name: "HeadingPrimary",
    });
    expect(headingPrimary).toBeInTheDocument();
  });

  it("heading primary should have correct style", () => {
    render(
      <Heading title="HeadingPrimary" type="h1" weight={OFontWeight.light} />
    );
    const headingPrimary = screen.getByRole("heading", {
      name: "HeadingPrimary",
    });
    expect(headingPrimary).toHaveStyle({
      backgroundColor: "var(--white)",
      cursor: "default",
      fontWeight: OFontWeight.light,
      fontSize: "8rem",
    });
  });
});
