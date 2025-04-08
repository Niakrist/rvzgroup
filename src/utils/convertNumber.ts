export const convertNumberInCurrency = (num: number): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(num);
};

export const convertNumberInGroupNumber = (num: number): string => {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
    num
  );
};
