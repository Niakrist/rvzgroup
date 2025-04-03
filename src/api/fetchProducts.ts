import { IBearinData } from "@/types/product";

export const fetchProducts = async (
  method: "GET" | "POST",
  params?: Record<string, string> | URLSearchParams
): Promise<IBearinData> => {
  const url =
    method === "GET"
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/?${new URLSearchParams(
          params as Record<string, string>
        )}`
      : process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(url as string, {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "POST" ? JSON.stringify(params) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  console.log(data);

  return data.rows;
};

export const getCategories = (params?: Record<string, string>) => {
  fetchProducts("POST", params);
};

export const getFilter = (params?: URLSearchParams) => {
  fetchProducts("GET", params);
};
