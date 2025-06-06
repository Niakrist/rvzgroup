import { urlsForCategory } from "@/constants/urlsForCategory";

const parseDimensionString = (string: string): number => {
  console.log("string: ", string);

  const prefixes = ["width", "inner-diameter", "outer-diameter"];

  const prefix = prefixes.find((pref) => string.startsWith(pref));

  if (!prefix) return NaN;

  const numberParts = string.slice(prefix.length + 1).split("-");
  if (numberParts.length === 1) return parseFloat(numberParts[0]);
  return parseFloat(numberParts[0] + "." + numberParts.slice(1).join(""));
};

export const getMetadataForCategory = (
  category: string
): { title: string; description: string; h1: string } => {
  const categories = category.split("_");
  const pathTitle = categories.map((item) => urlsForCategory[item]).join(" ");
  let title = "";
  let description = "";
  let h1: string = "";

  title = `Подшипники ${pathTitle}: Купить, характеристики, аналоги`;
  description = `Купить подшипники ${pathTitle} напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
  h1 = `Подшипники ${pathTitle} РВЗ`;

  if (category.includes("width")) {
    const widthMatch = String(parseDimensionString(category));

    title = `Подшипники с шириной ${widthMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с шириной ${widthMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
    h1 = `Подшипники с шириной ${widthMatch} мм`;
  }

  if (category.includes("inner-diameter")) {
    const innerDiameterMatch = parseDimensionString(category);
    title = `Подшипники с внутренним диаметром ${innerDiameterMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с внутренним диаметром ${innerDiameterMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
    h1 = `Подшипники с внутренним диаметром ${innerDiameterMatch} мм`;
  }

  if (category.includes("outer-diameter")) {
    const outerDiameterMatch = parseDimensionString(category);
    title = `Подшипники с наружным диаметром ${outerDiameterMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с наружным диаметром ${outerDiameterMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
    h1 = `Подшипники с наружным диаметром ${outerDiameterMatch} мм`;
  }

  return { title, description, h1 };
};
