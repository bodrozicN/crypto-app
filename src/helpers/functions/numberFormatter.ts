import { TCurrency, OCurrency } from "../../types";

export function currencyFormatter(value: string | number, currency: TCurrency) {
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

export function numberFormatter(arg1: unknown, arg2: TCurrency): string[];
export function numberFormatter(arg1: unknown): string[];
export function numberFormatter(arg1: unknown, arg2?: unknown): string[] {
  if (typeof arg1 === "undefined") return [];
  const numberValue = Math.abs(arg1 as number);
  if (isNaN(numberValue)) return ["", "no data"];
  if (!arg2) return ["%", numberValue.toFixed(2)];
  return currencyFormatter(numberValue, arg2 as TCurrency);
}

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
