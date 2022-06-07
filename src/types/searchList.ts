import { CoinListData } from "./";

export type SearchList = Pick<
  CoinListData,
  "name" | "iconUrl" | "uuid" | "price"
>;
