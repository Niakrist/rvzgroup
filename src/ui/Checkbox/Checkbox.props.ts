import React from "react";

export interface ICheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  isCheck: boolean;
  children: React.ReactNode;
  handleCheck: (id: string) => void;
}
