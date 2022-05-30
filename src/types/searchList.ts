import { CoinListData } from "./coinListData";

export type SearchList = Pick<
  CoinListData,
  "name" | "iconUrl" | "uuid" | "price"
>;
