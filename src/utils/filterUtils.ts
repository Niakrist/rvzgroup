import { getCategories, getFilter } from "@/api/fetchProducts";
import { notFound } from "next/navigation";

interface IFilterParams {
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

interface ICategoryParams {
  category?: string;
}

type UrlPaths = {
  bodyId: Record<string, string>;
  loadId: Record<string, string>;
  rowId: Record<string, string>;
  formaId: Record<string, string>;
  standartId: Record<string, string>;
  openId: Record<string, string>;
};

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

async function getFilteredProducts(
  filterParams: Promise<IFilterParams>,
  categoryParams?: Promise<ICategoryParams>
) {
  const resolvedFilterParams = await filterParams;
  const resolvedCategoryParams = categoryParams
    ? await categoryParams
    : undefined;

  const categoryFilters: Record<string, string> = {};

  if (resolvedCategoryParams?.category) {
    const regex = /(?<!radialno|razemnye|korpusnye|zakrytye)-/;
    const categories = resolvedCategoryParams.category.split(regex);
    let allPartsFound = true;

    for (const cat of categories) {
      const foundKey = Object.entries(urlPaths).find(
        ([_, values]) => values[cat]
      );
      if (foundKey) {
        const [key, values] = foundKey;
        categoryFilters[key] = values[cat];
      } else {
        allPartsFound = false;
      }
    }

    if (!allPartsFound) {
      notFound();
    }
  }
  const mergedParams = { ...categoryFilters, ...resolvedFilterParams };
  const hasFilters = Object.values(mergedParams).some(Boolean);

  if (hasFilters) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(mergedParams)) {
      if (value) searchParams.append(key, value);
    }
    return await getFilter(searchParams);
  } else {
    return await getCategories(categoryFilters);
  }
}
