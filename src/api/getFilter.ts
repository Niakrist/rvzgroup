import { BASE_URL } from "@/constants/base_url";
import { IBearinData } from "@/types/product";

export const getFilter = async (
  params?: URLSearchParams
): Promise<IBearinData | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}/bearing/?${params ? params : ""}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
