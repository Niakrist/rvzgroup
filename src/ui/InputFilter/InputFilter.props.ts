import React from "react";

export interface IInputDilterProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
  name: string;
  value: number;
  placeholder: string;
}
