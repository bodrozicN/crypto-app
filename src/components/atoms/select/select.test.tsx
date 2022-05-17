import { screen, render, fireEvent } from "@testing-library/react";
import Select from ".";
import { OFontWeight, OCurrency } from "../../../types";

describe("Select", () => {
  it("Should appear on screen", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} type="currencySelect" />);
    const select = screen.getByRole("select");
    expect(select).toBeInTheDocument();
  });

  it("Should have correct style", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} type="currencySelect" />);
    const select = screen.getByRole("select");
    expect(select).toHaveStyle({
      fontFamily: "inherit",
      fontSize: "1.4rem",
      fontWeight: `${OFontWeight.bold}`,
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    });
  });

  it("Test change", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} type="currencySelect" />);
    const select = screen.getByRole("select");
    fireEvent.change(select, { target: { value: OCurrency.btc } });
    expect(select).toHaveValue(OCurrency.btc);
  });
});
