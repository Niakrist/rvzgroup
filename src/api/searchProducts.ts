import { IBearinData } from "@/types/product";

export const searchProducts = async (
  search: string
): Promise<IBearinData | null> => {
  try {
    const response = await fetch("https://rvzgroup.ru/api/v1/bearing/search", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ q: search }),
      mode: "cors",
      next: { revalidate: 10 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
