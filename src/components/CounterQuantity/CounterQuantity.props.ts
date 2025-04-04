import { IBearing } from "@/types/bearing";

export interface ICounterQuantityProps {
  bgColor: "white" | "grey";
  size: "medium" | "large";
  product: IBearing;
  count: number;
}
