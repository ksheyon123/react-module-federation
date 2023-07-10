import React from "react";
import { Number } from "./Number";

interface IPaginationProps {
  curPage: number;
  totalPage: number;
  onClick: (e: any) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  curPage,
  totalPage,
  onClick,
}) => {
  const numberOfPage = Math.ceil(curPage / totalPage);

  const onClickGoToFirst = () => {
    onClick(1);
  };

  const onClickGoToPrev = () => {
    onClick(curPage - 1);
  };

  const onClickGoToNext = () => {
    onClick(curPage + 1);
  };

  const onClickGoToLast = () => {
    onClick(totalPage);
  };

  return (
    <div className="pagination__wrapper">
      <div onClick={onClickGoToFirst}>{"<<"}</div>
      <div onClick={onClickGoToPrev}>{"<"}</div>
      <Number number={1} isActive={false} />
      <div onClick={onClickGoToNext}>{">"}</div>
      <div onClick={onClickGoToLast}>{">>"}</div>
    </div>
  );
};

export default Pagination;
