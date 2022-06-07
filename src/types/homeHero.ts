import { IStats } from "../interfaces";
import { TCurrency } from "./currency";

export type HomeHeroProps = {
  stats: IStats | undefined;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: TCurrency;
};
