import { useState } from "react";
import { IGetCoinsListAndMarketDataParams } from "../interfaces";
import { OCurrency, OOrderBy, OOrderDirection, OTimePeriod } from "../types";
import { useSelect } from "./";

type Props = Omit<
  IGetCoinsListAndMarketDataParams,
  "offset" | "limit" | "queryParams"
>;

export const useFilters = () => {
  const [filters, setFilters] = useState<Props>({
    currency: OCurrency.usd,
    orderBy: OOrderBy.marketCap,
    orderDirection: OOrderDirection.desc,
    timePeriod: OTimePeriod.daily,
  });

  const handleSelect = useSelect<Props>(setFilters);

  return { ...filters, handleSelect };
};
