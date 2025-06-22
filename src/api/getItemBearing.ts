import { BASE_URL } from "@/constants/base_url";
import { IBearing } from "@/types/bearing";

export const getItemBearing = async (url: string): Promise<IBearing | null> => {
  try {
    const response = await fetch(`${BASE_URL}/bearing/${url}`);

    if (!response.ok) {
      throw new Error("Ошибка 404");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
