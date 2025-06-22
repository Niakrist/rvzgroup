import { BASE_URL } from "@/constants/base_url";
import { IBearinData } from "@/types/product";

export const getCategories = async (
  params?: object
): Promise<IBearinData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/bearing`, {
      headers: new Headers({ "Content-Type": "application/json" }),
      method: "POST",
      body: JSON.stringify(params),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
