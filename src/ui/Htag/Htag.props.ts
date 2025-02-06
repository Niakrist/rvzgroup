import React from "react";

export interface IHtagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  position?: "center";
}
