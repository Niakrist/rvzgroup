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
          { url: "gost-sharikovye", name: "ГОСТ" },
          { url: "iso-sharikovye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "sharikovye-odnoryadnye", name: "Однорядные" },
          { url: "sharikovye-dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "sharikovye-radialnye", name: "Радиальные" },
          { url: "sharikovye-radialno-upornye", name: "Радиально-упорные" },
          {
            url: "sharikovye-upornye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "sharikovye-standartnye", name: "Обычные" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "sharikovye-otkrytye", name: "Открытые" },
          { url: "sharikovye-zakrytye", name: "Закрытые" },
          {
            url: "sharikovye-zakrytye-s-odnoy-storony",
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
          { url: "gost-rolikovye", name: "ГОСТ" },
          { url: "iso-rolikovye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "rolikovye-odnoryadnye", name: "Однорядные" },
          { url: "rolikovye-dvuhryadnye", name: "Двухрядные" },
          { url: "rolikovye-chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "rolikovye-radialnye", name: "Радиальные" },
          { url: "rolikovye-radialno-upornye", name: "Радиально-упорные" },
          { url: "rolikovye-upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "rolikovye-standartnye", name: "Обычные" },
          { url: "rolikovye-sfericheskie", name: "Сферические" },
          { url: "rolikovye-konicheskie", name: "Конические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "rolikovye-otkrytye", name: "Открытые" },
          { url: "rolikovye-zakrytye", name: "Закрытые" },
          {
            url: "rolikovye-zakrytye-s-odnoy-storony",
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
          { url: "gost-igolchatye", name: "ГОСТ" },
          { url: "iso-igolchatye", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "igolchatye-odnoryadnye", name: "Однорядные" },
          { url: "igolchatye-dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "igolchatye-radialnye", name: "Радиальные" },
          { url: "igolchatye-radialno-upornye", name: "Радиально-упорные" },
          { url: "igolchatye-upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "igolchatye-standartnye", name: "Обычные" }],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "igolchatye-otkrytye", name: "Открытые" },
          { url: "igolchatye-zakrytye", name: "Закрытые" },
          {
            url: "igolchatye-zakrytye-s-odnoy-storony",
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
          { url: "gost-sfericheskie", name: "ГОСТ" },
          { url: "iso-sfericheskie", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "sfericheskie-odnoryadnye", name: "Однорядные" },
          { url: "sfericheskie-dvuhryadnye", name: "Двухрядные" },
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
          { url: "gost-radialnye", name: "ГОСТ" },
          { url: "iso-rolikovye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-radialnye", name: "Шариковые" },
          { url: "rolikovye-radialnye", name: "Роликовые" },
          { url: "igolchatye-radialnye", name: "Игольчатые" },
          { url: "sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "radialnye-odnoryadnye", name: "Однорядные" },
          { url: "radialnye-dvuhryadnye", name: "Двухрядные" },
          { url: "radialnye-chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "radialnye-standartnye", name: "Обычные" },
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
    url: "/radialno-upornye",
    img: "iconRadialno-Upornye.png",
    name: "Радиально-упорные",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost-radialno-upornye", name: "ГОСТ" },
          { url: "iso-radialno-upornye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-radialno-upornye", name: "Шариковые" },
          { url: "rolikovye-radialnou-pornye", name: "Роликовые" },
          { url: "igolchatye-radialno-upornye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye-radialno-upornye", name: "Однорядные" },
          { url: "dvuhryadnye-radialno-upornye", name: "Двухрядные" },
          { url: "chetyrehryadnye-radialno-upornye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye-radialno-upornye", name: "Обычные" },
          { url: "konicheskie-radialno-upornye", name: "Конические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "radialno-upornye-otkrytye", name: "Открытые" },
          { url: "radialno-upornye-zakrytye", name: "Закрытые" },
          {
            url: "radialno-upornye-zakrytye-s-odnoy-storony",
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
          { url: "gost-upornye", name: "ГОСТ" },
          { url: "iso-upornye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-upornye", name: "Шариковые" },
          { url: "rolikovye-upornye", name: "Роликовые" },
          { url: "igolchatye-upornye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "upornye-odnoryadnye", name: "Однорядные" },
          { url: "upornye-dvuhryadnye", name: "Двухрядные" },
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
          { url: "gost-odnoryadnye", name: "ГОСТ" },
          { url: "iso-odnoryadnye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-odnoryadnye", name: "Шариковые" },
          { url: "rolikovye-odnoryadnye", name: "Роликовые" },
          { url: "igolchatye-odnoryadnye", name: "Игольчатые" },
          { url: "sharnirnye-odnoryadnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye-odnoryadnye", name: "Радиальные" },
          { url: "radialno-upornye-odnoryadnye", name: "Радиально-упорные" },
          { url: "upornye-odnoryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye-odnoryadnye", name: "Обычные" },
          { url: "konicheskie-odnoryadnye", name: "Конические" },
          { url: "sfericheskie-odnoryadnye", name: "Сферические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "odnoryadnye-otkrytye", name: "Открытые" },
          { url: "odnoryadnye-zakrytye", name: "Закрытые" },
          {
            url: "odnoryadnye-zakrytye-s-odnoy-storony",
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
          { url: "gost-dvuhryadnye", name: "ГОСТ" },
          { url: "iso-dvuhryadnye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-dvuhryadnye", name: "Шариковые" },
          { url: "rolikovye-dvuhryadnye", name: "Роликовые" },
          { url: "igolchatye-dvuhryadnye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye-dvuhryadnye", name: "Радиальные" },
          { url: "radialno-upornye-dvuhryadnye", name: "Радиально-упорные" },
          { url: "upornye-dvuhryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye-dvuhryadnye", name: "Обычные" },
          { url: "konicheskie-dvuhryadnye", name: "Конические" },
          { url: "sfericheskie-dvuhryadnye", name: "Сферические" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "dvuhryadnye-otkrytye", name: "Открытые" },
          { url: "dvuhryadnye-zakrytye", name: "Закрытые" },
          {
            url: "dvuhryadnye-zakrytye-s-odnoy-storony",
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
          { url: "gost-sharnirnye", name: "ГОСТ" },
          { url: "iso-sharnirnye", name: "ISO" },
        ],
      },
    ],
  },
  {
    url: "/korpusnye-uzly",
    img: "iconKorpusnyeUzly.png",
    name: "Корпусные узлы",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost-korpusnyeuzly", name: "ГОСТ" },
          { url: "iso-korpusnyeuzly", name: "ISO" },
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
        categories: [{ url: "razemnye-korpusa", name: "ISO" }],
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
          { url: "gost-sharikovye", name: "Шариковые" },
          { url: "gost-rolikovye", name: "Роликовые" },
          { url: "gost-igolchatye", name: "Игольчатые" },
          { url: "gost-sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "gost-radialnye", name: "Радиальные" },
          { url: "gost-radialno-upornye", name: "Радиально-упорные" },
          { url: "gost-upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "gost-odnoryadnye", name: "Однорядные" },
          { url: "gost-dvuhryadnye", name: "Двухрядные" },
          { url: "gost-chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "gost-standartnye", name: "Обычные" },
          { url: "gost-konicheskie", name: "Конические" },
          { url: "gost-sfericheskie", name: "Сферические" },
          {
            url: "gost-samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "gost-otkrytye", name: "Открытые" },
          { url: "gost-zakrytye", name: "Закрытые" },
          {
            url: "gost-zakrytye-s-odnoy-storony",
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
          { url: "iso-sharikovye", name: "Шариковые" },
          { url: "iso-rolikovye", name: "Роликовые" },
          { url: "iso-igolchatye", name: "Игольчатые" },
          { url: "iso-sharnirnye", name: "Шарнирные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "iso-radialnye", name: "Радиальные" },
          { url: "iso-radialno-upornye", name: "Радиально-упорные" },
          { url: "iso-upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "iso-odnoryadnye", name: "Однорядные" },
          { url: "iso-dvuhryadnye", name: "Двухрядные" },
          { url: "iso-chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "iso-standartnye", name: "Обычные" },
          { url: "iso-konicheskie", name: "Конические" },
          { url: "iso-sfericheskie", name: "Сферические" },
          {
            url: "iso-samoustanavlivayushchiesya",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "iso-otkrytye", name: "Открытые" },
          { url: "iso-zakrytye", name: "Закрытые" },
          {
            url: "iso-zakrytye-s-odnoy-storony",
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
          { url: "gost-otkrytye", name: "ГОСТ" },
          { url: "iso-otkrytye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-otkrytye", name: "Шариковые" },
          { url: "rolikovye-otkrytye", name: "Роликовые" },
          { url: "igolchatye-otkrytye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye-otkrytye", name: "Однорядные" },
          { url: "dvuhryadnye-otkrytye", name: "Двухрядные" },
          { url: "chetyrehryadnye-otkrytye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye-otkrytye", name: "Радиальные" },
          { url: "radialno-upornye-otkrytye", name: "Радиально-упорные" },
          {
            url: "upornye-otkrytye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye-otkrytye", name: "Обычные" },
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
          { url: "gost-zakrytye", name: "ГОСТ" },
          { url: "iso-zakrytye", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-zakrytye", name: "Шариковые" },
          { url: "rolikovye-zakrytye", name: "Роликовые" },
          { url: "igolchatye-zakrytye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye-zakrytye", name: "Однорядные" },
          { url: "dvuhryadnye-zakrytye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye-zakrytye", name: "Радиальные" },
          { url: "radialno-upornye-zakrytye", name: "Радиально-упорные" },
          {
            url: "upornye-zakrytye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "standartnye-zakrytye", name: "Обычные" }],
      },
    ],
  },

  {
    url: "/zakrytye-s-odnoy-storony",
    img: "iconZakrytyeSOdnoyStorony.png",
    name: "Закрытые с одной стороны",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "gost-zakrytye-s-odnoy-storony", name: "ГОСТ" },
          { url: "iso-zakrytye-s-odnoy-storony", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye-zakrytye-s-odnoy-storony", name: "Шариковые" },
          { url: "rolikovye-zakrytye-s-odnoy-storony", name: "Роликовые" },
          { url: "igolchatye-zakrytye-s-odnoy-storony", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye-zakrytye-s-odnoy-storony", name: "Однорядные" },
          { url: "dvuhryadnye-zakrytye-s-odnoy-storony", name: "Двухрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye-zakrytye-s-odnoy-storony", name: "Радиальные" },
          {
            url: "radialno-upornye-zakrytye-s-odnoy-storony",
            name: "Радиально-упорные",
          },
          {
            url: "upornye-zakrytye-s-odnoy-storony",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "standartnye-zakrytye-s-odnoy-storony", name: "Обычные" },
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
