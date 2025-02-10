import React from "react";

export interface ICounterQuantityProps {
  quantity: number;
  handleDecrement: () => void;
  handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: () => void;
}
