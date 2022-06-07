import { CoinsTableProps, ExcangesDetails } from "../../../types";

type CoinsTable = {
  type: "coins";
} & CoinsTableProps;

type ExcangesTable = {
  type: "excanges";
  theadContent: string[];
  excanges: ExcangesDetails[] | undefined;
};

export type Props = CoinsTable | ExcangesTable;
