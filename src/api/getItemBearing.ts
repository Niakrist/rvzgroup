import { IBearing } from "@/types/bearing";

export const getItemBearing = async (url: string): Promise<IBearing | null> => {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/bearing/${url}`);

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
