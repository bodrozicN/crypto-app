import { screen, render, fireEvent } from "@testing-library/react";
import Select from ".";
import { OCurrency } from "../../../types";

describe("Select", () => {
  it("Should appear on screen", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} type="currencySelect" />);
    const select = screen.getByRole("select");
    expect(select).toBeInTheDocument();
  });

  it("Test change", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} type="currencySelect" />);
    const select = screen.getByRole("select");
    fireEvent.change(select, { target: { value: OCurrency.btc } });
    expect(select).toHaveValue(OCurrency.btc);
  });
});
