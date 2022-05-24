import React, { useCallback, useState } from "react";
import { IGetCoinsListAndMarketDataParams } from "../interfaces";
import {
  OCurrency,
  OLimitPerPage,
  OOrderBy,
  OOrderDirection,
  OTimePeriod,
} from "../types";

type Props = Omit<IGetCoinsListAndMarketDataParams, "offset">;

export const useFilters = () => {
  const [filters, setFilters] = useState<Props>({
    currency: OCurrency.usd,
    limit: OLimitPerPage.fifty,
    orderBy: OOrderBy.marketCap,
    orderDirection: OOrderDirection.desc,
    timePeriod: OTimePeriod.daily,
  });

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      setFilters((filters) => ({ ...filters, [name]: value }));
    },
    []
  );

  return { ...filters, handleSelect };
};
