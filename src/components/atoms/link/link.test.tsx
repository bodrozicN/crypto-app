import { Link, OLink, TLink } from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

type Props = {
  type: TLink;
  to: string;
};

const Component = ({ type, to }: Props) => (
  <Router>
    <Link to={to} title="link" type={type} />
  </Router>
);

describe("Link", () => {
  it("should render link primary", () => {
    render(<Component to="/" type={OLink.linkPrimary} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it('should navigate to "/" when click on link primary', () => {
    render(<Component to="/" type={OLink.linkPrimary} />);
    const link = screen.getByRole("link");
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/");
  });
  it('should navigate to "/portfolio" when click on link secondary', () => {
    render(<Component to="/portfolio" type={OLink.linkSecondary} />);
    const link = screen.getByRole("link");
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/portfolio");
  });
});
