import React from "react";

interface INumberProps {
  number: number;
  isActive: boolean;
  style?: any;
}

const Number: React.FC<INumberProps> = ({ number, isActive }) => {
  return <div>{number}</div>;
};

export { Number };
