import Select from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import { OFIlter, OCurrency } from "../../../types";

describe("Select", () => {
  const onChange = jest.fn();
  it("should render", () => {
    render(<Select type={OFIlter.currency} onChange={onChange} />);
    const select = screen.getByRole("listbox");
    expect(select).toBeInTheDocument();
  });

  it("handle change", () => {
    render(<Select type={OFIlter.currency} onChange={onChange} />);
    const select = screen.getByRole("listbox");
    fireEvent.change(select, { target: { value: OCurrency.btc } });
    expect(onChange).toHaveBeenCalled();
    fireEvent.change(select, { target: { value: OCurrency.btc } });
    expect(select).toHaveValue(OCurrency.btc);
  });
});
