export interface IMenuCatalogProps {
  menuList: [];
  onClick: (
    url: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  onMouseEnter: (url: string) => void;
  activeUrl: string;
}

export interface IItepProps {
  url: string;
  img: string;
  name: string;
}
