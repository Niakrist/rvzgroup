import { IBearing } from "@/types/bearing";

export interface IPriceProps {
  product: IBearing;
  fontSize: "fs16" | "fs18";
  className?: string;
}
