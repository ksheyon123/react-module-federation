import React from "react";

interface INumberProps {
  number: number;
  isActive: boolean;
  style?: any;
  onClick: (e: any) => void;
}

const Number: React.FC<INumberProps> = ({ number, isActive, onClick }) => {
  return <div onClick={onClick}>{number}</div>;
};

export { Number };
