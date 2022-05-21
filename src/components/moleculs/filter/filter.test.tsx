import Filter from ".";
import { screen, render } from "@testing-library/react";
import { OFIlter } from "../../../types";

describe("Filter", () => {
  const onChange = jest.fn();
  it("renders without crashing", () => {
    render(<Filter onChange={onChange} type={OFIlter.currency} />);
    expect(screen.getByRole("filter")).toBeInTheDocument();
  });

  it("renders the correct elements", () => {
    render(<Filter onChange={onChange} type={OFIlter.currency} />);
    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });
});
