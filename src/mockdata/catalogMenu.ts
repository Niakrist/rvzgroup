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
          { url: "sharikovye_gost", name: "ГОСТ" },
          { url: "sharikovye_iso", name: "ISO" },
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
          { url: "sharikovye_radialno-upornye", name: "Радиально-упорные" },
          {
            url: "sharikovye_upornye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "sharikovye_miniatyurnye", name: "Миниатюрные" },
          { url: "samoustanavlivayushchiesya", name: "Самоустанавливающиеся" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "sharikovye_otkrytye", name: "Открытые" },
          { url: "sharikovye_zakrytye", name: "Закрытые" },
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
          { url: "rolikovye_gost", name: "ГОСТ" },
          { url: "rolikovye_iso", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "rolikovye_odnoryadnye", name: "Однорядные" },
          { url: "rolikovye_dvuhryadnye", name: "Двухрядные" },
          { url: "rolikovye_trehryadnye", name: "Трехрядные" },
          { url: "rolikovye_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "rolikovye_radialnye", name: "Радиальные" },
          { url: "rolikovye_radialno-upornye", name: "Радиально-упорные" },
          { url: "rolikovye_upornye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "rolikovye_sfericheskie", name: "Сферические" },
          { url: "rolikovye_konicheskie", name: "Конические" },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "rolikovye_otkrytye", name: "Открытые" },
          { url: "rolikovye_zakrytye", name: "Закрытые" },
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
          { url: "igolchatye_gost", name: "ГОСТ" },
          { url: "igolchatye_iso", name: "ISO" },
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
          { url: "igolchatye_radialno-upornye", name: "Радиально-упорные" },
          // { url: "igolchatye_upornye", name: "Упорные" },
        ],
      },
      // {
      //   subName: "Наличие заглушки",
      //   categories: [
      //     { url: "igolchatye_otkrytye", name: "Открытые" },
      //     { url: "igolchatye_zakrytye", name: "Закрытые" },
      //   ],
      // },
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
          { url: "sfericheskie_gost", name: "ГОСТ" },
          { url: "sfericheskie_iso", name: "ISO" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "sfericheskie_odnoryadnye", name: "Однорядные" },
          { url: "sfericheskie_dvuhryadnye", name: "Двухрядные" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sfericheskie_rolikovye", name: "Роликовые" },
          // { url: "sfericheskie_dvuhryadnye", name: "Двухрядные" },
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
          { url: "radialnye_gost", name: "ГОСТ" },
          { url: "rolikovye_iso", name: "ISO" },
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
          { url: "radialnye_trehryadnye", name: "Трехрядные" },
          { url: "radialnye_chetyrehryadnye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "radialnye_sfericheskie", name: "Сферические" },
          {
            url: "radialnye_samoustanavlivayushchiesya",
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
          { url: "radialno-upornye_gost", name: "ГОСТ" },
          { url: "radialno-upornye_iso", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_radialno-upornye", name: "Шариковые" },
          { url: "rolikovye_radialno-upornye", name: "Роликовые" },
          { url: "igolchatye_radialno-upornye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Рядность",
        categories: [
          { url: "odnoryadnye_radialno-upornye", name: "Однорядные" },
          { url: "dvuhryadnye_radialno-upornye", name: "Двухрядные" },
          { url: "chetyrehryadnye_radialno-upornye", name: "Четырехрядные" },
        ],
      },
      {
        subName: "Форма",
        categories: [{ url: "konicheskie_radialno-upornye", name: "Конические" }],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "radialno-upornye_otkrytye", name: "Открытые" },
          { url: "radialno-upornye_zakrytye", name: "Закрытые" },
        ],
      },
      {
        subName: "Сепаратор",
        categories: [
          {
            url: "radialno-upornye_so-stalnym-separatorom",
            name: "Со стальным сепаратором",
          },
          {
            url: "radialno-upornye_s-latunnym-separatorom",
            name: "С латунным сепаратором",
          },
          {
            url: "radialno-upornye_s-tekstolitovym-separatorom",
            name: "С текстолитовым сепаратором",
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
          { url: "upornye_gost", name: "ГОСТ" },
          { url: "upornye_iso", name: "ISO" },
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
          { url: "odnoryadnye_gost", name: "ГОСТ" },
          { url: "odnoryadnye_iso", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_odnoryadnye", name: "Шариковые" },
          { url: "rolikovye_odnoryadnye", name: "Роликовые" },
          { url: "igolchatye_odnoryadnye", name: "Игольчатые" },
        ],
      },
      {
        subName: "Нагрузка",
        categories: [
          { url: "radialnye_odnoryadnye", name: "Радиальные" },
          { url: "radialno-upornye_odnoryadnye", name: "Радиально-упорные" },
          { url: "upornye_odnoryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "konicheskie_odnoryadnye", name: "Конические" },
          { url: "sfericheskie_odnoryadnye", name: "Сферические" },
          {
            url: "samoustanavlivayushchiesya_odnoryadnye",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "odnoryadnye_otkrytye", name: "Открытые" },
          { url: "odnoryadnye_zakrytye", name: "Закрытые" },
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
          { url: "dvuhryadnye_gost", name: "ГОСТ" },
          { url: "dvuhryadnye_iso", name: "ISO" },
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
          { url: "radialno-upornye_dvuhryadnye", name: "Радиально-упорные" },
          { url: "upornye_dvuhryadnye", name: "Упорные" },
        ],
      },
      {
        subName: "Форма",
        categories: [
          { url: "konicheskie_dvuhryadnye", name: "Конические" },
          { url: "sfericheskie_dvuhryadnye", name: "Сферические" },
          {
            url: "samoustanavlivayushchiesya_dvuhryadnye",
            name: "Самоустанавливающиеся",
          },
        ],
      },
      {
        subName: "Наличие заглушки",
        categories: [
          { url: "dvuhryadnye_otkrytye", name: "Открытые" },
          { url: "dvuhryadnye_zakrytye", name: "Закрытые" },
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
          { url: "sharnirnye_gost", name: "ГОСТ" },
          { url: "sharnirnye_iso", name: "ISO" },
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
          { url: "korpusnye-uzly_gost", name: "ГОСТ" },
          { url: "korpusnye-uzly_iso", name: "ISO" },
        ],
      },
    ],
  },
  // {
  //   url: "/razemnye-korpusa",
  //   img: "iconRazemnyeKorpusa.png",
  //   name: "Разборный корпусный узел",
  //   subCategories: [
  //     {
  //       subName: "Стандарт",
  //       categories: [{ url: "razemnye_korpusa", name: "ISO" }],
  //     },
  //   ],
  // },

  {
    url: "/otkrytye",
    img: "iconOtkrytye.png",
    name: "Открытые",
    subCategories: [
      {
        subName: "Стандарт",
        categories: [
          { url: "otkrytye_gost", name: "ГОСТ" },
          { url: "otkrytye_iso", name: "ISO" },
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
          { url: "radialno-upornye_otkrytye", name: "Радиально-упорные" },
          {
            url: "upornye_otkrytye",
            name: "Упорные",
          },
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
          { url: "zakrytye_gost", name: "ГОСТ" },
          { url: "zakrytye_iso", name: "ISO" },
        ],
      },
      {
        subName: "Тело качения",
        categories: [
          { url: "sharikovye_zakrytye", name: "Шариковые" },
          { url: "rolikovye_zakrytye", name: "Роликовые" },
          // { url: "igolchatye_zakrytye", name: "Игольчатые" },
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
          { url: "radialno-upornye_zakrytye", name: "Радиально-упорные" },
          {
            url: "upornye_zakrytye",
            name: "Упорные",
          },
        ],
      },
      {
        subName: "Материал",
        categories: [
          { url: "z", name: "Z" },
          { url: "zz", name: "ZZ" },
          { url: "rs", name: "RS" },
          { url: "2rs", name: "2RS" },
        ],
      },
    ],
  },

  // {
  //   url: "/zakrytye_s_odnoy_storony",
  //   img: "iconZakrytyeSOdnoyStorony.png",
  //   name: "Закрытые с одной стороны",
  //   subCategories: [
  //     {
  //       subName: "Стандарт",
  //       categories: [
  //         { url: "gost_zakrytye_s_odnoy_storony", name: "ГОСТ" },
  //         { url: "iso_zakrytye_s_odnoy_storony", name: "ISO" },
  //       ],
  //     },
  //     {
  //       subName: "Тело качения",
  //       categories: [
  //         { url: "sharikovye_zakrytye_s_odnoy_storony", name: "Шариковые" },
  //         { url: "rolikovye_zakrytye_s_odnoy_storony", name: "Роликовые" },
  //         { url: "igolchatye_zakrytye_s_odnoy_storony", name: "Игольчатые" },
  //       ],
  //     },
  //     {
  //       subName: "Рядность",
  //       categories: [
  //         { url: "odnoryadnye_zakrytye_s_odnoy_storony", name: "Однорядные" },
  //         { url: "dvuhryadnye_zakrytye_s_odnoy_storony", name: "Двухрядные" },
  //       ],
  //     },
  //     {
  //       subName: "Нагрузка",
  //       categories: [
  //         { url: "radialnye_zakrytye_s_odnoy_storony", name: "Радиальные" },
  //         {
  //           url: "radialno_upornye_zakrytye_s_odnoy_storony",
  //           name: "Радиально-упорные",
  //         },
  //         {
  //           url: "upornye_zakrytye_s_odnoy_storony",
  //           name: "Упорные",
  //         },
  //       ],
  //     },
  //     {
  //       subName: "Форма",
  //       categories: [
  //         { url: "standartnye_zakrytye_s_odnoy_storony", name: "Обычные" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   url: "/zakrytyesodnoystorony",
  //   img: "iconZakrytyeSOdnoyStorony.png",
  //   name: "Закрытые с одной стороны",
  // },
  // { url: "/zakrytye", img: "iconZakrytye.png", name: "Закрытые" },
];
