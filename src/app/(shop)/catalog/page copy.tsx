import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import Products from "@/components/Products/Products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Каталог подшипников",
};

interface ISearchParamsToSend {
  bodyId?: string;
  loadId?: string;
  rowId?: string;
  formaId?: string;
  standartId?: string;
  openId?: string;
  page?: string;
  minInnerDiameter?: string;
  maxInnerDiameter?: string;
  minOuterDiameter?: string;
  maxOuterDiameter?: string;
  minWidth?: string;
  maxWidth?: string;
  minPrice?: string;
  maxPrice?: string;
}

interface ICatalogPageProps {
  searchParams: Promise<ISearchParamsToSend>;
}

export default async function CatalogPage({
  searchParams,
}: ICatalogPageProps): Promise<React.JSX.Element> {
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
  } = await searchParams;
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
    searchParamsToSend.delete("staminPricendartId");
  }
  if (maxPrice) {
    searchParamsToSend.set("maxPrice", maxPrice);
  } else {
    searchParamsToSend.delete("maxPrice");
  }

  console.log("searchParamsToSend: ", searchParamsToSend);

  const products = searchParamsToSend.keys.length
    ? await getFilter(searchParamsToSend)
    : await getCategories();

  if (!products) return <div>Загрузка products</div>;

  return (
    <>
      <Products bearingList={products.rows} />
    </>
  );
}
