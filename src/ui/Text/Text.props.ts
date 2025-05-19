import React from "react";

export interface ITextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tag: "p" | "li";
  size: "small" | "medium" | "large";
  weight?: "normal" | "medium";
}
