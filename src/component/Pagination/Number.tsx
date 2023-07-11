import React from "react";
import { classNameBinder } from "../../utils/index";

interface INumberProps {
  number: number;
  isActive: boolean;
  style?: any;
  onClick: (e: any) => void;
}

const Number: React.FC<INumberProps> = ({ number, isActive, onClick }) => {
  return (
    <div
      className={classNameBinder("pagination__page", "active", isActive)}
      onClick={() => onClick(number)}
    >
      {number}
    </div>
  );
};

export { Number };
