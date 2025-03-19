import React from "react";
import Link from "next/link";
import cn from "classnames";

import { IMenuCatalogProps } from "./MenuCatalog.props";
import styles from "./MenuCatalog.module.css";

export const MenuCatalog: React.FC<IMenuCatalogProps> = ({
  menuList,
  onClick,
  onMouseEnter,
  activeUrl,
}) => {
  return (
    <nav>
      <ul className={styles.list}>
        {menuList.map((item) => (
          <li onMouseEnter={() => onMouseEnter(item.url)} key={item.url}>
            <Link
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                onClick(item.url, e)
              }
              className={cn(styles.link, {
                [styles.active]: activeUrl === item.url,
              })}
              href={`/catalog${item.url}`}>
              <img
                className={styles.images}
                src={`/icons/${item.img}`}
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
