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
  bearingDesignId: Record<string, string>;
  bearingSealId: Record<string, string>;
  bearingTypeId: Record<string, string>;
  cornerId: Record<string, string>;
  feature2Id: Record<string, string>;
  featureId: Record<string, string>;
  holeId: Record<string, string>;
  innerRingId: Record<string, string>;
  loadTypeId: Record<string, string>;
  materialId: Record<string, string>;
  outerRingId: Record<string, string>;
  rollerTypeId: Record<string, string>;
  rowCountId: Record<string, string>;
  sealId: Record<string, string>;
  sepId: Record<string, string>;
  standartId: Record<string, string>;
  bushingTypeId: Record<string, string>;
  lubricationHoleId: Record<string, string>;
  connectionId: Record<string, string>;
  // limit: Record<string, string>;
  // page: Record<string, string>;
  // innerDiameter: Record<string, string>;
  // outerDiameter: Record<string, string>;
  // widthBearing: Record<string, string>;
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
    bearingDesignId: {
      miniatyurnye: "1",
      samoustanavlivayushchiesya: "2",
      sfericheskie: "3",
      kombinirovannye: "4",
      konicheskie: "5",
      korpusnye: "6",
      sharnirnye: "7",
    },
    bearingSealId: {
      rs: "1",
      z: "2",
      "2rs": "3",
      zz: "4",
    },
    bearingTypeId: {
      kacheniya: "1",
      skolzheniya: "2",
    },
    cornerId: {
      "ugol-kontakta-12": "1",
      "ugol-kontakta-15": "2",
      "ugol-kontakta-20": "3",
      "ugol-kontakta-26": "4",
      "ugol-kontakta-36": "5",
      "ugol-kontakta-40": "6",
      "ugol-kontakta-60": "7",
      "s-trehtochechnym-kontaktom": "8",
      "s-chetyrehtochechnym-kontaktom": "9",
    },
    feature2Id: {
      "bez-kolec": "1",
      "s-capfoy": "2",
      "s-ploskim-upornym-kolcom": "3",
      "s-fasonnym-upornym-kolcom": "4",
    },
    featureId: {
      dyuymovye: "1",
      sdvoennye: "2",
      toroidalnye: "3",
      vibroustoychivye: "4",
      "s-kanavkoy-dlya-vvoda-sharikov": "5",
      "s-dlinnymi-cilindricheskimi-rolikami": "6",
      "s-korotkimi-cilindricheskimi-rolikami": "7",
    },
    holeId: {
      "konicheskoe-otverstie": "1",
      "cilindricheskoe-otverstie": "2",
    },
    innerRingId: {
      "bez-vnutrennego-kolca": "1",
      "s-bezbortovym-vnutrennim-kolcom": "2",
      "s-bortikami-na-vnutrennem-kolce": "3",
      "s-vystupayushchim-vnutrennim-kolcom": "4",
      "s-dvumya-vnutrennimi-kolcami": "5",
      "s-odnobortovym-vnutrennim-kolcom": "6",
      "s-razemnym-vnutrennim-kolcom": "7",
      "s-shirokim-vnutrennim-kolcom": "8",
      "so-skosom-na-vnutrennem-kolce": "9",
    },
    loadTypeId: {
      radialnye: "1",
      "radialno-upornye": "2",
      upornye: "3",
      "uporno-radialnye": "4",
    },
    materialId: {
      stalnye: "1",
      nerzhaveyushchie: "2",
      keramicheskie: "3",
    },
    outerRingId: {
      "bez-bortov-na-naruzhnom-kolce": "1",
      "bez-naruzhnogo-kolca": "2",
      "s-bortami-na-naruzhnom-kolce": "3",
      "s-dvuhrazlomnym-naruzhnym-kolcom": "4",
      "s-kanavkoy-na-naruzhnom-kolce": "5",
      "s-odnobortovym-naruzhnym-kolcom": "6",
      "s-odnorazlomnym-naruzhnym-kolcom": "7",
      "s-razlomom-naruzhnogo-kolca-v-prodolnom-napravlenii": "8",
      "s-razemnym-naruzhnym-kolcom": "9",
      "s-upornym-bortom-na-naruzhnom-kolce": "10",
      "s-flancem-na-naruzhnom-kolce": "11",
      "so-skosom-na-naruzhnom-kolce": "12",
      "so-sfericheskoy-poverhnostyu-naruzhnogo-kolca": "13",
    },
    rollerTypeId: {
      sharikovye: "1",
      rolikovye: "2",
      igolchatye: "3",
      rolikoigolchatye: "4",
      sharikoigolchatye: "5",
      "stal-po-stali": "6",
    },
    rowCountId: {
      odnoryadnye: "1",
      dvuhryadnye: "2",
      trehryadnye: "3",
      chetyrehryadnye: "4",
      shestiryadnye: "6",
      mnogoryadnye: "7",
    },
    sealId: {
      otkrytye: "1",
      zakrytye: "2",
    },
    sepId: {
      "so-stalnym-separatorom": "1",
      "s-latunnym-separatorom": "2",
      "bez-separatornye": "3",
      "s-poluseparatorom": "4",
      "s-tekstolitovym-separatorom": "5",
    },
    standartId: {
      gost: "1",
      iso: "2",
    },
    bushingTypeId: {
      "s-zakrepitelnoy-vtulkoy": "1",
      "so-styazhnoy-vtulkoy": "2",
    },
    lubricationHoleId: {
      "s-kanavkoy-dlya-smazki-na-naruzhnom-kolce": "1",
      "s-kanavkoy-i-otverstiyami-dlya-smazki": "2",
      "s-otverstiem-dlya-smazki-na-naruzhnom-kolce": "3",
    },
    connectionId: {
      razemnye: "1",
      nerazemnye: "2",
    },
    // innerDiameter: {},
    // outerDiameter: {},
    // widthBearing: {},
  };

  const regex = /(?<!radialno|razemnye|korpusnye|zakrytye)-/;
  const categories = category.split("_");
  const paramsToSend: ISearchParams = {};
  let allPartsFound = true;
  for (const cat of categories) {
    console.log("cat: ", cat);
    if (urlPaths.bearingDesignId[cat]) {
      paramsToSend.bearingDesignId = urlPaths.bearingDesignId[cat];
    } else if (urlPaths.bearingSealId[cat]) {
      paramsToSend.bearingSealId = urlPaths.bearingSealId[cat];
    } else if (urlPaths.bearingTypeId[cat]) {
      paramsToSend.bearingTypeId = urlPaths.bearingTypeId[cat];
    } else if (urlPaths.cornerId[cat]) {
      paramsToSend.cornerId = urlPaths.cornerId[cat];
    } else if (urlPaths.feature2Id[cat]) {
      paramsToSend.feature2Id = urlPaths.feature2Id[cat];
    } else if (urlPaths.featureId[cat]) {
      paramsToSend.featureId = urlPaths.featureId[cat];
    } else if (urlPaths.holeId[cat]) {
      paramsToSend.holeId = urlPaths.holeId[cat];
    } else if (urlPaths.innerRingId[cat]) {
      paramsToSend.innerRingId = urlPaths.innerRingId[cat];
    } else if (urlPaths.loadTypeId[cat]) {
      paramsToSend.loadTypeId = urlPaths.loadTypeId[cat];
    } else if (urlPaths.materialId[cat]) {
      paramsToSend.materialId = urlPaths.materialId[cat];
    } else if (urlPaths.outerRingId[cat]) {
      paramsToSend.outerRingId = urlPaths.outerRingId[cat];
    } else if (urlPaths.rollerTypeId[cat]) {
      paramsToSend.rollerTypeId = urlPaths.rollerTypeId[cat];
    } else if (urlPaths.rowCountId[cat]) {
      paramsToSend.rowCountId = urlPaths.rowCountId[cat];
    } else if (urlPaths.sealId[cat]) {
      paramsToSend.sealId = urlPaths.sealId[cat];
    } else if (urlPaths.sepId[cat]) {
      paramsToSend.sepId = urlPaths.sepId[cat];
    } else if (urlPaths.standartId[cat]) {
      paramsToSend.standartId = urlPaths.standartId[cat];
    } else if (urlPaths.bushingTypeId[cat]) {
      paramsToSend.bushingTypeId = urlPaths.bushingTypeId[cat];
    } else if (urlPaths.lubricationHoleId[cat]) {
      paramsToSend.lubricationHoleId = urlPaths.lubricationHoleId[cat];
    } else if (urlPaths.connectionId[cat]) {
      paramsToSend.connectionId = urlPaths.connectionId[cat];
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

  console.log("products: ", products);

  return (
    <>
      <Products bearingList={products.rows} count={products.count} />
    </>
  );
}
