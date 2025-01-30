export const products = [
  {
    name: "Подшипник 214",
    title: "Подшипник 214 - Купить в СПБ",
    description: "Описание подшипника 214",
    price: 349,
    article: "П0000037478",
    img: "ball-bearings.jpg",
    inStock: true,
    stock: 370,
  },
  {
    name: "Подшипник 3614",
    title: "Подшипник 3614 - Купить в СПБ",
    description: "Описание подшипника 3614",
    price: 0,
    article: "00-00016908",
    img: "spherical.jpg",
    inStock: false,
    stock: 0,
  },
  {
    name: "Подшипник 67512",
    title: "Подшипник 67512 - Купить в СПБ",
    description: "Описание подшипника 67512",
    price: 600,
    article: "П0000054947",
    img: "conical.jpg",
    inStock: true,
    stock: 700,
  },
  {
    name: "Подшипник 309",
    title: "Подшипник 309 - Купить в СПБ",
    description: "Описание подшипника 309",
    price: 260,
    article: "П0000042145",
    img: "open.jpg",
    inStock: true,
    stock: 0,
  },
  {
    name: "Подшипник 8210",
    title: "Подшипник 8210 - Купить в СПБ",
    description: "Описание подшипника 8210",
    price: 160,
    article: "00-00016901",
    img: "persistent.jpg",
    inStock: true,
    stock: 180,
  },
];

export interface IProduct {
  name: string;
  title: string;
  description: string;
  price: number;
  article: string;
  img: string;
  inStock: boolean;
}
