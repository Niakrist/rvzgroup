import { IFilterDropsownList } from "@/types/filters.interface";
import { IQueryParams } from "@/types/queryParams.interface";

export interface IDropDownProps {
  list: IFilterDropsownList[];
  name: string;
  filter: keyof IQueryParams;
}
