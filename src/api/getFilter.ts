import { IBearinData } from "@/types/product";

export const getFilter = async (
  params?: URLSearchParams
): Promise<IBearinData | null> => {
  try {
    const response = await fetch(
      `https://rvzgroup.ru/api/v1/bearing/?${params ? params : ""}`,
      {
        method: "GET",
        next: { revalidate: 10 },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
