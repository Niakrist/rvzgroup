import { IProduct } from "@/types/product";

export interface IPriceProps {
  product: IProduct;
  fontSize: "fs16" | "fs18";
  className?: string;
}
