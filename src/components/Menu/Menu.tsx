"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenuCatalog } from "@/components";
import styles from "./Menu.module.css";
import { menuCatalogList } from "@/mockdata/catalogMenu";
import { IMenuList } from "@/types/types";

export const Menu = () => {
  const [activeUrl, setActiveUrl] = useState<string>("/sharikovye");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  const menuList: IMenuList[] = menuCatalogList;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (
    url: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (isMobile) {
      e.preventDefault();
      setActiveUrl(url);
    }
  };

  const handleMouseEnter = (id: string) => {
    setActiveUrl(id);
  };
  const activeItem = menuList.find((el) => el.url === activeUrl);

  return (
    <div className={styles.menu}>
      <MenuCatalog
        menuList={menuList}
        onMouseEnter={handleMouseEnter}
        onClick={handleLinkClick}
        activeUrl={activeUrl}
      />
      <div className={styles.additionalMenu}>
        <div className={styles.activeItem}>
          <img
            className={styles.images}
            src={`./icons/${activeItem?.img}`}
            alt=""
          />{" "}
          {activeItem?.name}
        </div>
        {activeUrl &&
          menuList
            .filter((url) => activeUrl === url.url)
            .map((item) => {
              return item.subCategories?.map((el) => (
                <div key={el.subName}>
                  <p className={styles.subName}>{el.subName}</p>
                  <ul>
                    {el.categories?.map((item) => (
                      <li className={styles.elItem} key={item.url}>
                        <Link className={styles.sublink} href={item.url}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ));
            })}
      </div>
    </div>
  );
};
