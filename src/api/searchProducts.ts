// Переделать на POST запрос отправлять строку и искать ао ней для для выпадающего списка
// После нажатия ENTER длеать GET зарпос для фильтров через query
import { IBearinData } from "@/types/product";

export const searchProducts = async (search: string): Promise<IBearinData> => {
  const response = await fetch(`http://localhost:4000/api/v1/bearing/search`, {
    headers: new Headers({ "Content-Type": "application/json" }),
    method: "POST",
    body: JSON.stringify({ q: search }),
  });
  const data = await response.json();
  return data;
};
