import React from "react";

export interface IModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  width: "small" | "medium" | "mobileMenu" | "big";
  height?: "100vh";
}
