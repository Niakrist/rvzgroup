import React from "react";

export interface IPProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  tag: "p" | "li";
  size: "small" | "medium" | "large";
}
