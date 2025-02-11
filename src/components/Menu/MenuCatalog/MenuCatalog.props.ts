export interface IMenuCatalogProps {
  menuList: IMenuList[];
  onClick: (
    url: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  onMouseEnter: (url: string) => void;
  activeUrl: string;
}

export interface IMenuList {
  url: string;
  img: string;
  name: string;
  subCategories?: subCategories[];
}

interface subCategories {
  subName: string;
  categories: ICategory[];
}
interface ICategory {
  url: string;
  name: string;
}
