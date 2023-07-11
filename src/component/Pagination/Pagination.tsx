import React, { ReactNode, useReducer } from "react";
import { Number } from "./Number";
import "./Pagination.css";

interface IPaginationProps {
  curPage: number;
  totalPage?: number;
  totalCount: number;
  pageSize: number;
  itemPerPage?: number;
  onPageChange: (e: any) => void;
  custromRender?: (e: any) => ReactNode;
}

const Pagination: React.FC<IPaginationProps> = ({
  curPage, // Current page
  totalPage, // Overall pages
  totalCount, // Number Of Items
  pageSize, // Number of Pages
  itemPerPage = 20, // Number of items per page
  onPageChange,
  custromRender = null,
}) => {
  const lastPage = totalPage || Math.ceil(totalCount / itemPerPage);
  const pageIdx = Math.floor((curPage - 1) / pageSize);

  const onClickGoToFirst = () => {
    if (curPage - 1 <= 0) return;
    onPageChange(1);
  };

  const onClickGoToPrev = () => {
    if (curPage - 1 <= 0) {
      return;
    }
    onPageChange(curPage - 1);
  };

  const onClickGoToNext = () => {
    if (curPage >= lastPage) return;
    onPageChange(curPage + 1);
  };

  const onClickGoToLast = () => {
    if (curPage >= lastPage) return;
    onPageChange(lastPage);
  };

  const pages = () => {
    let p = [];
    const startPage = pageIdx * pageSize + 1;
    const endPage =
      startPage + pageSize >= lastPage ? lastPage + 1 : startPage + pageSize;
    let i = startPage;
    for (i; i < endPage; i++) {
      p.push(i);
    }
    return p;
  };

  const renderNumbers = !!custromRender
    ? (num: number) => custromRender(num)
    : (num: number) => (
        <Number
          number={num}
          isActive={num === curPage}
          onClick={onPageChange}
        />
      );

  return (
    <div className="pagination__wrapper">
      <div className="pagination__first" onClick={onClickGoToFirst}>
        {"<<"}
      </div>
      <div className="pagination__prev" onClick={onClickGoToPrev}>
        {"<"}
      </div>
      {pages().map((el) => renderNumbers(el))}
      <div className="pagination__next" onClick={onClickGoToNext}>
        {">"}
      </div>
      <div className="pagination__last" onClick={onClickGoToLast}>
        {">>"}
      </div>
    </div>
  );
};

export { Pagination };
