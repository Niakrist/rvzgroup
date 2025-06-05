import { IBearing } from "@/types/bearing";

export const getItemBearing = async (url: string): Promise<IBearing> => {
  console.log("url: ", url);
  const response = await fetch(`http://localhost:4000/api/v1/bearing/${url}`);
  const data = await response.json();
  return data;
};
