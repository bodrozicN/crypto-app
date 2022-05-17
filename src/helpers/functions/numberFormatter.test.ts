import { numberFormatter } from "./numberFormatter";
import { OCurrency } from "../../types/currency";

it("should format number", () => {
  expect(numberFormatter(1, OCurrency.usd)).toMatchObject(["$", "1"]);
  expect(numberFormatter(1, OCurrency.btc)).toMatchObject(["BTC", "1"]);
  expect(numberFormatter(0, OCurrency.usd)).toMatchObject(["$", "0"]);
});
