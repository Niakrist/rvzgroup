import { IBearing } from "@/types/bearing";

export const getItemBearing = async (url: string): Promise<IBearing | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bearing/${url}`, {
      next: { revalidate: 10800 },
    });

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
