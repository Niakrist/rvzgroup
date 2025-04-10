export interface ICounterQuantityProps {
  bgColor: "white" | "grey";
  size: "medium" | "large";
  handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  count: number;
  className?: string;
}
