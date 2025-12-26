import { IBearing } from "@/types/bearing";

export const getProductsWithoutPagination = async (
  params?: URLSearchParams,
): Promise<IBearing[] | []> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bearing/all?${params}`, {
      next: { revalidate: 10800 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
