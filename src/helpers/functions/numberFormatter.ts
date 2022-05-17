import { TCurrency, OCurrency } from "../../types";

export function numberFormatter(value: string | number, currency: TCurrency) {
  const numValue = +value;

  const formatter = (currency: string) => {
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(numValue);

    const length = formattedValue.length;

    const char =
      currency !== "BTC" ? formattedValue[0] : formattedValue.slice(0, 3);

    const price =
      currency !== "BTC"
        ? formattedValue.slice(1, length - 3)
        : formattedValue.slice(4, length - 3);

    return [char, price];
  };

  switch (currency) {
    case OCurrency.usd:
      return formatter("USD");

    case OCurrency.eur:
      return formatter("EUR");

    case OCurrency.btc:
      return formatter("BTC");

    default:
      throw new Error("Invalid currency");
  }
}
