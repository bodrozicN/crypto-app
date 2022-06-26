import React from "react";
import { Wrapper } from "./style";
import { Button } from "../../atoms";
import { Pagination as PaginationProps } from "../../../types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import uniqid from "uniqid";

const Pagination = (props: PaginationProps) => {
  const { page, lastPage, handleChangePage } = props;
  let pages: number[] = [];

  if (page < 4) pages = [0, 1, 2, 3, 4];
  if (page >= 4 && page < lastPage - 4)
    pages = [page - 2, page - 1, page, page + 1, page + 2];
  if (page >= lastPage - 4)
    pages = [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1];

  return (
    <Wrapper>
      {lastPage && (
        <div>
          <Button
            disabled={page === 0}
            $type="arrowButton"
            onClick={() => handleChangePage(page - 1)}
          >
            <IoIosArrowBack />
          </Button>

          <div>
            {pages.map((page) => (
              <Button
                key={uniqid()}
                className={page === props.page ? "active" : ""}
                $type="paginationButton"
                onClick={() => handleChangePage(page)}
                content={page + 1}
              />
            ))}

            {page < lastPage - 4 && <span>...</span>}

            {page < lastPage - 4 && (
              <Button
                disabled={page === lastPage - 1}
                $type="paginationButton"
                content={lastPage}
                onClick={() => {
                  handleChangePage(lastPage - 1);
                }}
              />
            )}
          </div>
          <Button
            disabled={page === lastPage - 1}
            $type="arrowButton"
            onClick={() => {
              handleChangePage(page + 1);
            }}
          >
            <IoIosArrowForward />
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default React.memo(
  Pagination,
  (prev, next) =>
    prev.handleChangePage === next.handleChangePage &&
    prev.lastPage === next.lastPage &&
    prev.page === next.page
);
