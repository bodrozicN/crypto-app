import { useCallback, useState } from "react";
import { IGetCoinsListAndMarketDataParams } from "../interfaces";
import { OLimitPerPage } from "../types";
import { useSelect } from "./useSelect";

type Props = Pick<IGetCoinsListAndMarketDataParams, "offset" | "limit"> & {
  page: number;
};

export const usePagination = (numOfItems: number | undefined) => {
  const [pagination, setPagination] = useState<Props>({
    page: 0,
    offset: 0,
    limit: OLimitPerPage.fifty,
  });

  const lastPage = Math.ceil((numOfItems || 0) / pagination.limit);

  const handleSelect = useSelect<Props>(setPagination);

  const handleChangePage = useCallback((page: number) => {
    window.scrollTo(0, 0);
    setPagination((pagination) => ({
      ...pagination,
      page,
      offset: page * pagination.limit,
    }));
  }, []);

  return {
    ...pagination,
    lastPage,
    handleSelect,
    handleChangePage,
  };
};
