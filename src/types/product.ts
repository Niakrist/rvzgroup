export interface IProduct {
  name: string;
  title: string;
  description: string;
  price: number;
  article: string;
  img: string;
  images?: string[];
  characteristic?: { key: string; value: string | number }[];
  inStock: boolean;
  stock: number;
}
