import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";

export interface ICounterQuantityProps {
  bgColor: "white" | "grey";
  size: "medium" | "large";
  cart: ICartItem;
}
