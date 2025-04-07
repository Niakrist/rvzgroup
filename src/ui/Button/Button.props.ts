import { ReactNode } from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color: "whiteText" | "blackText";
  bgColor: "blue" | "white" | "border";
  size: "small" | "medium" | "big";
  className?: string;
}
