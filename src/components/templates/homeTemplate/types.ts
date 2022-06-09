import { HomeHeroProps, CoinsTableProps, Pagination } from "../../../types";

export type Props = {
  heroProps: HomeHeroProps;
  tableProps: CoinsTableProps;
  isError: boolean;
  paginationProps: Pagination;
};
