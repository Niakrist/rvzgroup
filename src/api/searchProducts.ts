// Переделать на POST запрос отправлять строку и искать ао ней для для выпадающего списка
// После нажатия ENTER длеать GET зарпос для фильтров через query
import { BASE_URL } from "@/constants/base_url";
import { IBearinData } from "@/types/product";

export const searchProducts = async (
  search: string
): Promise<IBearinData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/bearing/search`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ q: search }),
      mode: "cors", // явное указание режима CORS
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
