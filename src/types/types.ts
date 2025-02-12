export interface ICategory {
  path: string;
  name: string;
  img: string;
}

export interface IFilter {
  minPrice: number | "";
  maxPrice: number | "";
  minInnerDiameter: number | "";
  maxInnerDiameter: number | "";
  minOuterDiameter: number | "";
  maxOuterDiameter: number | "";
  minWidth: number | "";
  maxWidth: number | "";
}

export interface IList {
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
