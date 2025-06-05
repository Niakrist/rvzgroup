import { IMenuList } from "@/types/types";

export const menuCatalogList: IMenuList[] = [
  {
    url: "/sharikovye",
    img: "iconSharikovye.png",
    name: "Шариковые",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_sharikovye", name: "ГОСТ" },
          { url: "iso_sharikovye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "sharikovye_odnoryadnye", name: "Однорядные" },
          { url: "sharikovye_dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "sharikovye_radialnye", name: "Радиальные" },
          { url: "sharikovye_radialno_upornye", name: "Радиально-упорные" },
          {
            url: "sharikovye_upornye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "sharikovye_standartnye", name: "Обычные" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "sharikovye_otkrytye", name: "Открытые" },
          { url: "sharikovye_zakrytye", name: "Закрытые" },
          {
            url: "sharikovye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_rolikovye", name: "ГОСТ" },
          { url: "iso_rolikovye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "rolikovye_odnoryadnye", name: "Однорядные" },
          { url: "rolikovye_dvuhryadnye", name: "Двухрядные" },
          { url: "rolikovye_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "rolikovye_radialnye", name: "Радиальные" },
          { url: "rolikovye_radialno_upornye", name: "Радиально-упорные" },
          { url: "rolikovye_upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "rolikovye_standartnye", name: "Обычные" },
          { url: "rolikovye_sfericheskie", name: "Сферические" },
          { url: "rolikovye_konicheskie", name: "Конические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "rolikovye_otkrytye", name: "Открытые" },
          { url: "rolikovye_zakrytye", name: "Закрытые" },
          {
            url: "rolikovye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_igolchatye", name: "ГОСТ" },
          { url: "iso_igolchatye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "igolchatye_odnoryadnye", name: "Однорядные" },
          { url: "igolchatye_dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "igolchatye_radialnye", name: "Радиальные" },
          { url: "igolchatye_radialno_upornye", name: "Радиально-упорные" },
          { url: "igolchatye_upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "igolchatye_standartnye", name: "Обычные" }],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "igolchatye_otkrytye", name: "Открытые" },
          { url: "igolchatye_zakrytye", name: "Закрытые" },
          {
            url: "igolchatye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
        ],
      },
    ],
  },
  {
    url: "/sfericheskie",
    img: "iconSfericheskie.png",
    name: "Сферические",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_sfericheskie", name: "ГОСТ" },
          { url: "iso_sfericheskie", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "sfericheskie_odnoryadnye", name: "Однорядные" },
          { url: "sfericheskie_dvuhryadnye", name: "Двухрядные" },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_radialnye", name: "ГОСТ" },
          { url: "iso_rolikovye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_radialnye", name: "Шариковые" },
          { url: "rolikovye_radialnye", name: "Роликовые" },
          { url: "igolchatye_radialnye", name: "Игольчатые" },
          { url: "sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "radialnye_odnoryadnye", name: "Однорядные" },
          { url: "radialnye_dvuhryadnye", name: "Двухрядные" },
          { url: "radialnye_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "radialnye_standartnye", name: "Обычные" },
          { url: "sfericheskie", name: "Сферические" },
          {
            url: "samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
    ],
  },
  {
    url: "/radialno_upornye",
    img: "iconRadialno-Upornye.png",
    name: "Радиально-упорные",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_radialno_upornye", name: "ГОСТ" },
          { url: "iso_radialno_upornye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_radialno_upornye", name: "Шариковые" },
          { url: "rolikovye_radialnou_pornye", name: "Роликовые" },
          { url: "igolchatye_radialno_upornye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye_radialno_upornye", name: "Однорядные" },
          { url: "dvuhryadnye_radialno_upornye", name: "Двухрядные" },
          { url: "chetyrehryadnye_radialno_upornye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye_radialno_upornye", name: "Обычные" },
          { url: "konicheskie_radialno_upornye", name: "Конические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "radialno_upornye_otkrytye", name: "Открытые" },
          { url: "radialno_upornye_zakrytye", name: "Закрытые" },
          {
            url: "radialno_upornye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_upornye", name: "ГОСТ" },
          { url: "iso_upornye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_upornye", name: "Шариковые" },
          { url: "rolikovye_upornye", name: "Роликовые" },
          { url: "igolchatye_upornye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "upornye_odnoryadnye", name: "Однорядные" },
          { url: "upornye_dvuhryadnye", name: "Двухрядные" },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_odnoryadnye", name: "ГОСТ" },
          { url: "iso_odnoryadnye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_odnoryadnye", name: "Шариковые" },
          { url: "rolikovye_odnoryadnye", name: "Роликовые" },
          { url: "igolchatye_odnoryadnye", name: "Игольчатые" },
          { url: "sharnirnye_odnoryadnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_odnoryadnye", name: "Радиальные" },
          { url: "radialno_upornye_odnoryadnye", name: "Радиально-упорные" },
          { url: "upornye_odnoryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye_odnoryadnye", name: "Обычные" },
          { url: "konicheskie_odnoryadnye", name: "Конические" },
          { url: "sfericheskie_odnoryadnye", name: "Сферические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "odnoryadnye_otkrytye", name: "Открытые" },
          { url: "odnoryadnye_zakrytye", name: "Закрытые" },
          {
            url: "odnoryadnye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
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
        subName: "Стандарт",
        categories: [
          { url: "gost_dvuhryadnye", name: "ГОСТ" },
          { url: "iso_dvuhryadnye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_dvuhryadnye", name: "Шариковые" },
          { url: "rolikovye_dvuhryadnye", name: "Роликовые" },
          { url: "igolchatye_dvuhryadnye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_dvuhryadnye", name: "Радиальные" },
          { url: "radialno_upornye_dvuhryadnye", name: "Радиально-упорные" },
          { url: "upornye_dvuhryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye_dvuhryadnye", name: "Обычные" },
          { url: "konicheskie_dvuhryadnye", name: "Конические" },
          { url: "sfericheskie_dvuhryadnye", name: "Сферические" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "dvuhryadnye_otkrytye", name: "Открытые" },
          { url: "dvuhryadnye_zakrytye", name: "Закрытые" },
          {
            url: "dvuhryadnye_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
        ],
      },
    ],
  },
  {
    url: "/sharnirnye",
    img: "iconSharnirnye.png",
    name: "Шарнирные",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_sharnirnye", name: "ГОСТ" },
          { url: "iso_sharnirnye", name: "ISO" },
        ],
      },
    ],
  },
  {
    url: "/korpusnye",
    img: "iconKorpusnyeUzly.png",
    name: "Корпусные узлы",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_korpusnye", name: "ГОСТ" },
          { url: "iso_korpusnye", name: "ISO" },
        ],
      },
    ],
  },
  {
    url: "/razemnye-korpusa",
    img: "iconRazemnyeKorpusa.png",
    name: "Разборный корпусный узел",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [{ url: "razemnye_korpusa", name: "ISO" }],
      },
    ],
  },
  {
    url: "/gost",
    img: "iconGost.png",
    name: "ГОСТ",
    subCategories: [
      {
        subName: "Тело качения",
        categories: [
          { url: "gost_sharikovye", name: "Шариковые" },
          { url: "gost_rolikovye", name: "Роликовые" },
          { url: "gost_igolchatye", name: "Игольчатые" },
          { url: "gost_sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "gost_radialnye", name: "Радиальные" },
          { url: "gost_radialno_upornye", name: "Радиально-упорные" },
          { url: "gost_upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "gost_odnoryadnye", name: "Однорядные" },
          { url: "gost_dvuhryadnye", name: "Двухрядные" },
          { url: "gost_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "gost_standartnye", name: "Обычные" },
          { url: "gost_konicheskie", name: "Конические" },
          { url: "gost_sfericheskie", name: "Сферические" },
          {
            url: "gost_samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "gost_otkrytye", name: "Открытые" },
          { url: "gost_zakrytye", name: "Закрытые" },
          {
            url: "gost_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
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
          { url: "iso_sharikovye", name: "Шариковые" },
          { url: "iso_rolikovye", name: "Роликовые" },
          { url: "iso_igolchatye", name: "Игольчатые" },
          { url: "iso_sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "iso_radialnye", name: "Радиальные" },
          { url: "iso_radialno_upornye", name: "Радиально-упорные" },
          { url: "iso_upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "iso_odnoryadnye", name: "Однорядные" },
          { url: "iso_dvuhryadnye", name: "Двухрядные" },
          { url: "iso_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "iso_standartnye", name: "Обычные" },
          { url: "iso_konicheskie", name: "Конические" },
          { url: "iso_sfericheskie", name: "Сферические" },
          {
            url: "iso_samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "iso_otkrytye", name: "Открытые" },
          { url: "iso_zakrytye", name: "Закрытые" },
          {
            url: "iso_zakrytye_s_odnoy_storony",
            name: "Закрытые с одной стороны",
          },
        ],
      },
    ],
  },
  {
    url: "/otkrytye",
    img: "iconOtkrytye.png",
    name: "Открытые",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_otkrytye", name: "ГОСТ" },
          { url: "iso_otkrytye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_otkrytye", name: "Шариковые" },
          { url: "rolikovye_otkrytye", name: "Роликовые" },
          { url: "igolchatye_otkrytye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye_otkrytye", name: "Однорядные" },
          { url: "dvuhryadnye_otkrytye", name: "Двухрядные" },
          { url: "chetyrehryadnye_otkrytye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_otkrytye", name: "Радиальные" },
          { url: "radialno_upornye_otkrytye", name: "Радиально-упорные" },
          {
            url: "upornye_otkrytye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye_otkrytye", name: "Обычные" },
          { url: "konicheskie", name: "Конические" },
          { url: "sfericheskie", name: "Сферические" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
    ],
  },

  {
    url: "/zakrytye",
    img: "iconZakrytye.png",
    name: "Закрытые",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_zakrytye", name: "ГОСТ" },
          { url: "iso_zakrytye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_zakrytye", name: "Шариковые" },
          { url: "rolikovye_zakrytye", name: "Роликовые" },
          { url: "igolchatye_zakrytye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye_zakrytye", name: "Однорядные" },
          { url: "dvuhryadnye_zakrytye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_zakrytye", name: "Радиальные" },
          { url: "radialno_upornye_zakrytye", name: "Радиально-упорные" },
          {
            url: "upornye_zakrytye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "standartnye_zakrytye", name: "Обычные" }],
      },
    ],
  },

  {
    url: "/zakrytye_s_odnoy_storony",
    img: "iconZakrytyeSOdnoyStorony.png",
    name: "Закрытые с одной стороны",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost_zakrytye_s_odnoy_storony", name: "ГОСТ" },
          { url: "iso_zakrytye_s_odnoy_storony", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_zakrytye_s_odnoy_storony", name: "Шариковые" },
          { url: "rolikovye_zakrytye_s_odnoy_storony", name: "Роликовые" },
          { url: "igolchatye_zakrytye_s_odnoy_storony", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye_zakrytye_s_odnoy_storony", name: "Однорядные" },
          { url: "dvuhryadnye_zakrytye_s_odnoy_storony", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_zakrytye_s_odnoy_storony", name: "Радиальные" },
          {
            url: "radialno_upornye_zakrytye_s_odnoy_storony",
            name: "Радиально-упорные",
          },
          {
            url: "upornye_zakrytye_s_odnoy_storony",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye_zakrytye_s_odnoy_storony", name: "Обычные" },
        ],
      },
    ],
  },

  // {
  //   url: "/zakrytyesodnoystorony",
  //   img: "iconZakrytyeSOdnoyStorony.png",
  //   name: "Закрытые с одной стороны",
  // },
  // { url: "/zakrytye", img: "iconZakrytye.png", name: "Закрытые" },
];
