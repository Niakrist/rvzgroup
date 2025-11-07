import { IBearing } from "@/types/bearing";

export const getProductsWithoutPagination = async (
  params?: URLSearchParams,
): Promise<IBearing[] | []> => {
  try {
    const response = await fetch(`https://rvzgroup.ru/api/v1/bearing/all?${params}`, {
      next: { revalidate: 10800 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
