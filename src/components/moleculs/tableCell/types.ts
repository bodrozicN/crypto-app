import { ChratProps } from "../../../types";

export type Props = {
  rank?: string | number;
  src?: string;
  alt?: string;
  name?: string;
  symbol?: string;
  price?: string;
  currnecy?: string;
  $reverseOrder?: boolean;
  chartData?: ChratProps | null;
};
