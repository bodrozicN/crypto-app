import {
  CoinsTableProps,
  ExcangesTableProps,
  PortfolioTableProps,
} from "../../../types";

type CoinsTable = {
  type: "coins";
} & CoinsTableProps;

type ExcangesTable = {
  type: "excanges";
} & ExcangesTableProps;

type PortfolioTable = {
  type: "portfolio";
  handleDeleteCoin: (uuid: string | undefined) => void;
} & PortfolioTableProps;

export type Props = CoinsTable | ExcangesTable | PortfolioTable;
