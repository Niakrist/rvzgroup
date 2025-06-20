import { IBearinData } from "@/types/product";

export const getFilter = async (
  params?: URLSearchParams
): Promise<IBearinData | boolean> => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/bearing/?${params ? params : ""}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
