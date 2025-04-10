import { ISearchParams } from "@/types/ISearchParams.interface";

export const getFilteredProducts = <T extends ISearchParams>(
  searchParams: T,
  categoryParams?: ISearchParams
) => {
  const searchParamsToSend = new URLSearchParams();

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value) {
        searchParamsToSend.set(key, value);
      } else {
        searchParamsToSend.delete(key);
      }
    }
  }
  if (categoryParams) {
    for (const [key, value] of Object.entries(categoryParams)) {
      if (value) searchParamsToSend.set(key, value);
    }
  }
  return searchParamsToSend;
};
