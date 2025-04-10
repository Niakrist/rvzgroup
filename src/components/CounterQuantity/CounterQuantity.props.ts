export interface ICounterQuantityProps {
  bgColor: "white" | "grey";
  size: "medium" | "large";
  handleChangeQuantity: any;
  handleIncrement: any;
  handleDecrement: any;
  count: number;
  className?: string;
}
