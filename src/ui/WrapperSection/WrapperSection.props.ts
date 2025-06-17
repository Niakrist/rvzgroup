import React from "react";

export interface IWrapperSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
  bgSection: "white" | "grey";
  className?: string;
}
