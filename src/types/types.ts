export interface ICategory {
  path: string;
  name: string;
  img: string;
}

export interface IFilter {
  minPrice: number | "";
  maxPrice: number | "";
  min: number | "";
  max: number | "";
  minOuterDiameter: number | "";
  maxOuterDiameter: number | "";
  minWidth: number | "";
  maxWidth: number | "";
}

interface IList {
  id: string;
  name: string;
  isCheck: boolean;
}

export interface IMenuList {
  url: string;
  img: string;
  name: string;
  subCategories?: subCategories[];
}

interface subCategories {
  subName: string;
  categories: ICategoryMune[];
}
interface ICategoryMune {
  url: string;
  name: string;
}

export interface IBearing {
  id: number;
  id1c: string | null;
  id1cRvz: string | null;
  price: number | null;
  priceRvz: number | null;
  quantity: number | null;
  quantityRvz: number | null;
  name: string;
  url: string;
  title: string;
  h1: string;
  description: string | null;
  brand: string;
  analog: string;
  analogUrl: string;
  images: string;
  content: string;
  innerDiameter: number;
  outerDiameter: number;
  width: number;
  newBearing: boolean;
  stockBearing: number | null;
  popularBearing: boolean;
  standartId: number;
  bodyId: number;
  formaId: number | null;
  loadId: number;
  rowId: number;
  openId: number;
}
