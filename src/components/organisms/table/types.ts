import { CoinsTableProps, CoinExcanges } from "../../../types";

type CoinsTable = {
  type: "coins";
} & CoinsTableProps;

type ExcangesTable = {
  type: "excanges";
} & CoinExcanges;

export type Props = CoinsTable | ExcangesTable;
