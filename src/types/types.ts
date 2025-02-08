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
