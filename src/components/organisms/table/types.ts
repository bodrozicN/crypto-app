import { CoinsTableProps, ExcangesDetails } from "../../../types";

type CoinsTable = {
  type: "coins";
} & CoinsTableProps;

type ExcangesTable = {
  type: "excanges";
  tableHead: string[];
  excanges: ExcangesDetails[] | undefined;
};

export type Props = CoinsTable | ExcangesTable;
