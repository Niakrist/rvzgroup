export interface IServicesPages {
  path: string;
  name: string;
}

export const servicesPages: Array<IServicesPages> = [
  { path: "/about", name: "О компании" },
  { path: "/brand-rvz", name: "Бренд РВЗ" },
  { path: "/contacts", name: "Контакты" },
  { path: "/delivery", name: "Доставка и оплата" },
  { path: "/vacancy", name: "Вакансии" },
];
