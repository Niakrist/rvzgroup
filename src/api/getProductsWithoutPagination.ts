import { IBearing } from "@/types/bearing";

export const getProductsWithoutPagination = async (
  params: URLSearchParams
): Promise<IBearing[] | []> => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/bearing/all?${params}`,
      {
        next: { revalidate: 10800 },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
