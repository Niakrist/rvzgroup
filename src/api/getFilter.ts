import { IBearinData } from "@/types/product";

export const getFilter = async (params?: URLSearchParams): Promise<IBearinData | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/bearing/?${params ? params : ""}`,
      {
        method: "GET",
        next: { revalidate: 10800 },
      },
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
