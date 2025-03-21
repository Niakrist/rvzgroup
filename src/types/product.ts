import { IBearing } from "./bearing";

export interface IProduct {
  name: string;
  title: string;
  description: string;
  price: number;
  article: string;
  img: string;
  images?: string[] | string;
  characteristic?: { key: string; value: string | number }[];
  inStock: boolean;
  stock: number;
}

export interface IBearinData {
  count: number;
  rows: IBearing[];
}
