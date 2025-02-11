import React from "react";

import styles from "./MenuCatalog.module.css";
import cn from "classnames";
import Link from "next/link";
import { IItepProps, IMenuCatalogProps } from "./MenuCatalog.props";
const MenuCatalog: React.FC<IMenuCatalogProps> = ({
  menuList,
  onClick,
  onMouseEnter,
  activeUrl,
}) => {
  return (
    <nav>
      <ul className={styles.list}>
        {menuList.map((item: IItepProps) => (
          <li onMouseEnter={() => onMouseEnter(item.url)} key={item.url}>
            <Link
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                onClick(item.url, e)
              }
              className={cn(styles.link, {
                [styles.active]: activeUrl === item.url,
              })}
              href={`.${item.url}`}>
              <img
                className={styles.images}
                src={`./icons/${item.img}`}
                alt=""
              />{" "}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuCatalog;
