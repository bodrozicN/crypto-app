import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IGetCoinsListParams } from "../interfaces";
import { OLimitPerPage } from "../types";
import { useSelect } from "./useSelect";

type Props = Pick<IGetCoinsListParams, "offset" | "limit"> & {
  page: number;
};

export const usePagination = (numOfItems: number | undefined) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [pagination, setPagination] = useState<Props>({
    page: Number(searchParams.get("page")) || 0,
    offset: 0,
    limit: OLimitPerPage.fifty,
  });

  const lastPage = Math.ceil((numOfItems || 0) / pagination.limit);
  const handleSelect = useSelect<Props>(setPagination);

  const handleChangePage = useCallback(
    (page: number) => {
      navigate(`?page=${page}`);
      window.scrollTo(0, 0);
    },
    [navigate]
  );

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      page: Number(searchParams.get("page")),
      offset: Number(searchParams.get("page")) * prev.limit,
    }));
  }, [searchParams]);

  return {
    ...pagination,
    lastPage,
    handleSelect,
    handleChangePage,
  };
};
