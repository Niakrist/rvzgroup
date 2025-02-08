import { IList } from "@/types/types";
import React from "react";

export interface IDropDownProps {
  list: IList[];
  setList: React.Dispatch<React.SetStateAction<IList[]>>;
  name: string;
}
