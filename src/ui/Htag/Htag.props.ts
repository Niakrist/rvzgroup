import React from "react";

export interface IHtagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
  size: "verySmall" | "small" | "medium" | "large";
  tag: "h1" | "h2" | "h3" | "h4";
  position?: "center";
  className?: string;
}
