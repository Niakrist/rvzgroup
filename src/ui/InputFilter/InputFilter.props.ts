import React from "react";

export interface IRange {
  minPrice: number | "";
  maxPrice: number | "";
}

export interface IInputDilterProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
  name: keyof IRange;
  value: number | "";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
