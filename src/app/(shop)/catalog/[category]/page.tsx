import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import Products from "@/components/Products/Products";
import { ISearchParams } from "@/types/ISearchParams.interface";
import { getFilteredProducts } from "@/utils/getFilteredProducts";
import { notFound } from "next/navigation";
import React from "react";

interface ICategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<ISearchParams>;
}

type UrlPaths = {
  bodyId: Record<string, string>;
  loadId: Record<string, string>;
  rowId: Record<string, string>;
  formaId: Record<string, string>;
  standartId: Record<string, string>;
  openId: Record<string, string>;
};

export default async function CategoryPage({
  params,
  searchParams,
}: ICategoryPageProps) {
  const { category } = await params;

  const search = await searchParams;

  if (!category) {
    notFound();
  }

  const urlPaths: UrlPaths = {
    bodyId: {
      sharikovye: "1",
      rolikovye: "2",
      igolchatye: "3",
      sharnirnye: "4",
    },

    loadId: {
      radialnye: "1",
      "radialno-upornye": "2",
      upornye: "3",
    },

    rowId: {
      odnoryadnye: "1",
      dvuhryadnye: "2",
      chetyrekhryadnye: "3",
    },

    formaId: {
      samoustanavlivayuschiesya: "1",
      sfericheskie: "2",
      konicheskie: "3",
      "korpusnye-uzly": "4",
    },

    standartId: {
      gost: "1",
      iso: "2",
    },
    openId: {
      otkrytye: "1",
      zakrytye: "2",
      "zakrytye-s-odnoy-storony": "3",
    },
  };

  const regex = /(?<!radialno|razemnye|korpusnye|zakrytye)-/;
  const categories = category.split(regex);
  const paramsToSend: ISearchParams = {};
  let allPartsFound = true;
  for (const cat of categories) {
    if (urlPaths.bodyId[cat]) {
      paramsToSend.bodyId = urlPaths.bodyId[cat];
    } else if (urlPaths.loadId[cat]) {
      paramsToSend.loadId = urlPaths.loadId[cat];
    } else if (urlPaths.rowId[cat]) {
      paramsToSend.rowId = urlPaths.rowId[cat];
    } else if (urlPaths.formaId[cat]) {
      paramsToSend.formaId = urlPaths.formaId[cat];
    } else if (urlPaths.standartId[cat]) {
      paramsToSend.standartId = urlPaths.standartId[cat];
    } else if (urlPaths.openId[cat]) {
      paramsToSend.openId = urlPaths.openId[cat];
    } else {
      allPartsFound = false;
    }
  }

  if (!allPartsFound) {
    return notFound();
  }

  const searchParamsToSend = getFilteredProducts(search, paramsToSend);

  const products = searchParamsToSend.size
    ? await getFilter(searchParamsToSend)
    : await getCategories(paramsToSend);

  if (!products) return;

  return (
    <>
      <Products bearingList={products.rows} count={products.count} />
    </>
  );
}
