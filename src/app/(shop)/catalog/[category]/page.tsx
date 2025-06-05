import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import Products from "@/components/Products/Products";
import { ISearchParams } from "@/types/ISearchParams.interface";
import { getFilteredProducts } from "@/utils/getFilteredProducts";
import { Metadata } from "next";
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

export const urlPaths: UrlPaths = {
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
  // innerDiameter: {
  //   innerDiameter: "5",
  // },
  // outerDiameter: {},
  // widthBearing: {},
};

const urls = {
  miniatyurnye: "миниатюрные",
  samoustanavlivayushchiesya: "самоустанавливающиеся",
  sfericheskie: "сферические",
  kombinirovannye: "комбинированные",
  konicheskie: "конические",
  korpusnye: "корпусные",
  sharnirnye: "шарнирные",
  rs: "закрытые пластиком RS с одной стороны",
  z: "закрытые металлом Z с одной стороны",
  "2rs": "закрытые пластиком 2RS",
  zz: "закрытые металлом ZZ",
  kacheniya: "качения",
  skolzheniya: "скольжения",
  "s-zakrepitelnoy-vtulkoy": "с закрепительной втулкой",
  "so-styazhnoy-vtulkoy": "со стяжной втулкой",
  razemnye: "разъемные",
  nerazemnye: "неразъемные",
  "ugol-kontakta-12": "с углом контакта 12 градусов",
  "ugol-kontakta-15": "с углом контакта 15 градусов",
  "ugol-kontakta-20": "с углом контакта 20 градусов",
  "ugol-kontakta-26": "с углом контакта 26 градусов",
  "ugol-kontakta-36": "с углом контакта 36 градусов",
  "ugol-kontakta-40": "с углом контакта 40 градусов",
  "ugol-kontakta-60": "с углом контакта 60 градусов",
  "s-trehtochechnym-kontaktom": "с трехточечным контактом",
  "s-chetyrehtochechnym-kontaktom": "с четырехточечным контактом",
  "bez-kolec": "без колец",
  "s-capfoy": "с цапфой",
  "s-ploskim-upornym-kolcom": "с плоским упорным кольцом",
  "s-fasonnym-upornym-kolcom": "с фасонным упорным кольцом",
  dyuymovye: "дюймовые",
  sdvoennye: "сдвоенные",
  toroidalnye: "тороидальные",
  vibroustoychivye: "виброустойчивые",
  "s-kanavkoy-dlya-vvoda-sharikov": "с канавкой для ввода шариков",
  "s-dlinnymi-cilindricheskimi-rolikami": "с длинными цилиндрическими роликами",
  "s-korotkimi-cilindricheskimi-rolikami":
    "с короткими цилиндрическими роликами",
  "konicheskoe-otverstie": "с коническим отверстием",
  "cilindricheskoe-otverstie": "с цилиндрическим отверстием",
  "bez-vnutrennego-kolca": "без внутреннего кольца",
  "s-bezbortovym-vnutrennim-kolcom": "с безбортовым внутренним кольцом",
  "s-bortikami-na-vnutrennem-kolce": "с бортиками на внутреннем кольце",
  "s-vystupayushchim-vnutrennim-kolcom": "с выступающим внутренним кольцом",
  "s-dvumya-vnutrennimi-kolcami": "с двумя внутренними кольцами",
  "s-odnobortovym-vnutrennim-kolcom": "с однобортовым внутренним кольцом",
  "s-razemnym-vnutrennim-kolcom": "с разъемным внутренним кольцом",
  "s-shirokim-vnutrennim-kolcom": "с широким внутренним кольцом",
  "so-skosom-na-vnutrennem-kolce": "со скосом на внутреннем кольце",
  radialnye: "радиальные",
  "radialno-upornye": "радиально-упорные",
  upornye: "упорные",
  "uporno-radialnye": "упорно-радиальные",
  "s-kanavkoy-dlya-smazki-na-naruzhnom-kolce":
    "с канавкой для смазки на наружном кольце",
  "s-kanavkoy-i-otverstiyami-dlya-smazki":
    "с канавкой и отверстиями для смазки",
  "s-otverstiem-dlya-smazki-na-naruzhnom-kolce":
    "с отверстием для смазки на наружном кольце",
  stalnye: "стальные",
  nerzhaveyushchie: "нержавеющие",
  keramicheskie: "керамические",
  "bez-bortov-na-naruzhnom-kolce": "без бортов на наружном кольце",
  "bez-naruzhnogo-kolca": "без наружного кольца",
  "s-bortami-na-naruzhnom-kolce": "с бортами на наружном кольце",
  "s-dvuhrazlomnym-naruzhnym-kolcom": "с двухразломным наружным кольцом",
  "s-kanavkoy-na-naruzhnom-kolce": "с канавкой на наружном кольце",
  "s-odnobortovym-naruzhnym-kolcom": "с однобортовым наружным кольцом",
  "s-odnorazlomnym-naruzhnym-kolcom": "с одноразломным наружным кольцом",
  "s-razemnym-naruzhnym-kolcom": "с разъемным наружным кольцом",
  "s-upornym-bortom-na-naruzhnom-kolce": "с упорным бортом на наружном кольце",
  "s-flancem-na-naruzhnom-kolce": "с фланцем на наружном кольце",
  "so-skosom-na-naruzhnom-kolce": "со скосом на наружном кольце",
  "so-sfericheskoy-poverhnostyu-naruzhnogo-kolca":
    "со сферической поверхностью наружного кольца",
  sharikovye: "шариковые",
  rolikovye: "роликовые",
  igolchatye: "игольчатые",
  rolikoigolchatye: "роликоигольчатые",
  sharikoigolchatye: "шарикоигольчатые",
  "stal-po-stali": "сталь по стали",
  odnoryadnye: "однорядные",
  dvuhryadnye: "двухрядные",
  trehryadnye: "трехрядные",
  chetyrehryadnye: "четырехрядные",
  shestiryadnye: "шестирядные",
  mnogoryadnye: "многорядные",
  otkrytye: "открытые",
  zakrytye: "закрытые",
  "so-stalnym-separatorom": "со стальным сепаратором",
  "s-latunnym-separatorom": "с латунным сепаратором",
  "bez-separatornye": "без сепараторные",
  "s-poluseparatorom": "с полусепаратором",
  "s-tekstolitovym-separatorom": "с текстолитовым сепаратором",
  gost: "ГОСТ",
  iso: "ISO",
};

export async function generateMetadata({
  params,
}: ICategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  const categories = category.split("_");

  const pathTitle = categories.map((item) => urls[item]).join(" ");

  let title = "";
  let description = "";

  console.log("category: ", category);

  title = `Подшипники ${pathTitle}: Купить, характеристики, аналоги`;
  description = `Купить подшипники ${pathTitle} напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;

  if (category.includes("width")) {
    const widthBearingMatch = category.match(/^width-(\d+)(?:-(\d+))?$/);
    console.log("widthBearingMatch: ", widthBearingMatch);

    title = `Подшипники с шириной ${widthBearingMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с шириной ${widthBearingMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
  }

  if (category.includes("inner-diameter")) {
    const innerВiameterMatch = category.match(
      /^inner-diameter-(\d+)(?:-(\d+))?$/
    );
    title = `Подшипники с внутренним диаметром ${innerВiameterMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с внутренним диаметром ${innerВiameterMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
  }

  if (category.includes("outer-diameter")) {
    const outerDiameterMatch = category.match(
      /^outer-diameter-(\d+)(?:-(\d+))?$/
    );
    title = `Подшипники с наружным диаметром ${outerDiameterMatch} мм: Купить, характеристики, аналоги`;
    description = `Купить подшипники с наружным диаметром ${outerDiameterMatch} мм напрямую от производителя! Высокое качество, широкий ассортимент подшипников, оптимальные цены и доставка по всей России. Закажите сейчас!`;
  }

  return {
    title,
    description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: ICategoryPageProps) {
  const { category } = await params;
  const search = await searchParams;

  if (!category) {
    notFound();
  }

  const categories = category.split("_");
  const paramsToSend: ISearchParams = {};
  let allPartsFound = true;
  for (const cat of categories) {
    const innerDiameterMatch = cat.match(/^inner-diameter-(\d+(?:\.\d+)?)$/);
    const outerDiameterMatch = cat.match(/^outer-diameter-(\d+(?:\.\d+)?)$/);
    const widthBearingMatch = cat.match(/^width-(\d+(?:\.\d+)?)$/);
    if (innerDiameterMatch) {
      paramsToSend.innerDiameter = innerDiameterMatch[1];
    } else if (outerDiameterMatch) {
      paramsToSend.outerDiameter = outerDiameterMatch[1];
    } else if (widthBearingMatch) {
      paramsToSend.widthBearing = widthBearingMatch[1];
    } else if (urlPaths.bearingDesignId[cat]) {
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

  return (
    <>
      <Products bearingList={products.rows} count={products.count} />
    </>
  );
}
