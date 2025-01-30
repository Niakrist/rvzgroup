import { ReactNode } from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color: "blue" | "white" | "border";
  size?: "big";
  className?: string;
}
