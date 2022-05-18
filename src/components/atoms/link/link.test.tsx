import Link from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const returnLink = () => (
  <BrowserRouter>
    <Link type="homeLink" to="/" title="Home" />
  </BrowserRouter>
);

describe("Link", () => {
  it("should render", () => {
    render(returnLink());
    expect(screen.getByRole("navLink")).toBeInTheDocument();
  });
  it('should navigate to "/" when clicked', () => {
    render(returnLink());
    fireEvent.click(screen.getByRole("navLink"));
    expect(window.location.pathname).toBe("/");
  });
});
