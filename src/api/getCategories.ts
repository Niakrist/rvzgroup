import { IBearinData } from "@/types/product";

export const getCategories = async (params?: object): Promise<IBearinData> => {
  console.log("params:", params);

  const response = await fetch("http://localhost:4000/api/v1/bearing", {
    headers: new Headers({ "Content-Type": "application/json" }),
    method: "POST",
    body: JSON.stringify(params),
  });
  const data = await response.json();

  return data;
};
