import { IBearinData } from "@/types/product";

export const getProducts = async (params?: object): Promise<IBearinData | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bearing`, {
      headers: new Headers({ "Content-Type": "application/json" }),
      method: "POST",
      body: JSON.stringify(params),
      next: { revalidate: 10800 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
