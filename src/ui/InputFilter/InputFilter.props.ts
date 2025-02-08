import { IFilter } from "@/types/types";
import React from "react";

export interface IInputDilterProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
  name: keyof IFilter;
  value: number | "";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
