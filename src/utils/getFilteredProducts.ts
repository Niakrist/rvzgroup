import { ISearchParams } from "@/types/ISearchParams.interface";

export const getFilteredProducts = <T extends ISearchParams>(
  searchParams: T
) => {
  const {
    page,
    standartId,
    bodyId,
    loadId,
    rowId,
    formaId,
    openId,
    minInnerDiameter,
    maxInnerDiameter,
    minOuterDiameter,
    maxOuterDiameter,
    minWidth,
    maxWidth,
    minPrice,
    maxPrice,
  } = searchParams;

  const searchParamsToSend = new URLSearchParams();

  if (page) {
    searchParamsToSend.set("page", page);
  } else {
    searchParamsToSend.delete("page");
  }
  if (standartId) {
    searchParamsToSend.set("standartId", standartId);
  } else {
    searchParamsToSend.delete("standartId");
  }
  if (bodyId) {
    searchParamsToSend.set("bodyId", bodyId);
  } else {
    searchParamsToSend.delete("bodyId");
  }
  if (loadId) {
    searchParamsToSend.set("loadId", loadId);
  } else {
    searchParamsToSend.delete("loadId");
  }
  if (rowId) {
    searchParamsToSend.set("rowId", rowId);
  } else {
    searchParamsToSend.delete("rowId");
  }
  if (formaId) {
    searchParamsToSend.set("formaId", formaId);
  } else {
    searchParamsToSend.delete("formaId");
  }
  if (openId) {
    searchParamsToSend.set("openId", openId);
  } else {
    searchParamsToSend.delete("openId");
  }
  if (minInnerDiameter) {
    searchParamsToSend.set("minInnerDiameter", minInnerDiameter);
  } else {
    searchParamsToSend.delete("minInnerDiameter");
  }
  if (maxInnerDiameter) {
    searchParamsToSend.set("maxInnerDiameter", maxInnerDiameter);
  } else {
    searchParamsToSend.delete("maxInnerDiameter");
  }
  if (minOuterDiameter) {
    searchParamsToSend.set("minOuterDiameter", minOuterDiameter);
  } else {
    searchParamsToSend.delete("minOuterDiameter");
  }
  if (maxOuterDiameter) {
    searchParamsToSend.set("maxOuterDiameter", maxOuterDiameter);
  } else {
    searchParamsToSend.delete("maxOuterDiameter");
  }
  if (minWidth) {
    searchParamsToSend.set("minWidth", minWidth);
  } else {
    searchParamsToSend.delete("minWidth");
  }
  if (maxWidth) {
    searchParamsToSend.set("maxWidth", maxWidth);
  } else {
    searchParamsToSend.delete("maxWidth");
  }
  if (minPrice) {
    searchParamsToSend.set("minPrice", minPrice);
  } else {
    searchParamsToSend.delete("minPrice");
  }
  if (maxPrice) {
    searchParamsToSend.set("maxPrice", maxPrice);
  } else {
    searchParamsToSend.delete("maxPrice");
  }
  return searchParamsToSend;
};
