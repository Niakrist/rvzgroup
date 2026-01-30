import { IBearinData } from "@/types/product";

export const searchProducts = async (search: string): Promise<IBearinData | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bearing/search`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ q: search }),
      mode: "cors",
      next: { revalidate: 10800 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
