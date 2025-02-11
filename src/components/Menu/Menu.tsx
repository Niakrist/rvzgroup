import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./Menu.module.css";

// import cn from "classnames";
import MenuCatalog from "./MenuCatalog/MenuCatalog";

const menuList = [
  {
    url: "/sharikovye",
    img: "iconSharikovye.png",
    name: "Шариковые",
    subCategories: [
      {
        subName: "Рядность",
        categories: [
          { url: "/sharikovye-odnoryadnye", name: "Однорядные" },
          { url: "/sharikovye-dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/sharikovye-radialnye", name: "Радиальные" },
          { url: "/sharikovye-radialnoupornye", name: "Радиально-упорные" },
          { url: "/sharikovye-upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/sharikovye-standartnye", name: "Обычные" },
          { url: "/samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
    ],
  },
  {
    url: "/rolikovye",
    img: "iconRolikovye.png",
    name: "Роликовые",
    subCategories: [
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
          { url: "/chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/sfericheskie", name: "Сферические" },
          { url: "/konicheskie", name: "Конические" },
        ],
      },
    ],
  },
  {
    url: "/igolchatye",
    img: "iconIgolchatye.png",
    name: "Игольчатые",
    subCategories: [
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "/standartnye", name: "Обычные" }],
      },
    ],
  },
  {
    url: "/sfericheskie",
    img: "iconSfericheskie.png",
    name: "Сферические",
    subCategories: [
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
        ],
      },
    ],
  },
  {
    url: "/radialnye",
    img: "iconRadialnye.png",
    name: "Радиальные",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
          { url: "/sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
          { url: "/chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/sfericheskie", name: "Сферические" },
          {
            url: "//samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
    ],
  },
  {
    url: "/radialnoupornye",
    img: "iconRadialnoUpornye.png",
    name: "Радиально-упорные",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
          { url: "/chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/konicheskie", name: "Конические" },
        ],
      },
    ],
  },
  {
    url: "/upornye",
    img: "iconUpornye.png",
    name: "Упорные",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
        ],
      },
    ],
  },
  {
    url: "/odnoryadnye",
    img: "iconOdnoryadnye.png",
    name: "Однорядные",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
          { url: "/sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/konicheskie", name: "Конические" },
          { url: "/sfericheskie", name: "Сферические" },
        ],
      },
    ],
  },
  {
    url: "/dvuhryadnye",
    img: "iconDvuhryadnye.png",
    name: "Двухрядные ",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/konicheskie", name: "Конические" },
          { url: "/sfericheskie", name: "Сферические" },
          { url: "/samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
    ],
  },
  { url: "/sharnirnye", img: "iconSharnirnye.png", name: "Шарнирные" },
  {
    url: "/korpusnyeuzly",
    img: "iconKorpusnyeUzly.png",
    name: "Корпусные узлы",
  },
  {
    url: "/razemnyekorpusa",
    img: "iconRazemnyeKorpusa.png",
    name: "Разборный корпусный узел",
  },
  {
    url: "/gost",
    img: "iconGost.png",
    name: "ГОСТ",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
          { url: "/sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
          { url: "/chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/konicheskie", name: "Конические" },
          { url: "/sfericheskie", name: "Сферические" },
          { url: "/samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
    ],
  },
  {
    url: "/iso",
    img: "iconIso.png",
    name: "ISO",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "/sharikovye", name: "Шариковые" },
          { url: "/rolikovye", name: "Роликовые" },
          { url: "/igolchatye", name: "Игольчатые" },
          { url: "/sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "/radialnye", name: "Радиальные" },
          { url: "/radialnoupornye", name: "Радиально-упорные" },
          { url: "/upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "/odnoryadnye", name: "Однорядные" },
          { url: "/dvuhryadnye", name: "Двухрядные" },
          { url: "/chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "/standartnye", name: "Обычные" },
          { url: "/konicheskie", name: "Конические" },
          { url: "/sfericheskie", name: "Сферические" },
          { url: "/samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
    ],
  },
  // { url: "/otkrytye", img: "iconOtkrytye.png", name: "Открытые" },
  // {
  //   url: "/zakrytyesodnoystorony",
  //   img: "iconZakrytyeSOdnoyStorony.png",
  //   name: "Закрытые с одной стороны",
  // },
  // { url: "/zakrytye", img: "iconZakrytye.png", name: "Закрытые" },
];

const Menu = () => {
  const [activeUrl, setActiveUrl] = useState<string>("/sharikovye");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

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
      {/* <nav>
        <ul className={styles.list}>
          {menuList.map((item) => (
            <li onMouseEnter={() => handleMouseEnter(item.url)} key={item.url}>
              <Link
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                  handleLinkClick(item.url, e)
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
      </nav> */}
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

export default Menu;
