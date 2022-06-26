import { TCurrency, OCurrency } from "../../types";

export function currencyFormatter(
  value: string | number | undefined,
  currency: TCurrency
) {
  if (!value) return [];
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
        ? formattedValue.slice(1, length)
        : formattedValue.slice(4, length);

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

export function percentFormatter(value: number | string | undefined) {
  if (!value) return [];
  value = +value;
  return ["%", value < 0 ? (value * -1).toFixed(2) : value.toFixed(2)];
}

// function for converting large values
export function nFormatter(num: number | string, digits: number) {
  num = +num;
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "N/A";
}
