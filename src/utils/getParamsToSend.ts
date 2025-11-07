import { urlPaths } from "@/constants/urlPaths";
import { ISearchParams } from "@/types/ISearchParams.interface";

export const getParamsToSend = (category: string) => {
  const categories = category.split("_");
  const paramsToSend: ISearchParams = {};
  let allPartsFound = true;
  for (const cat of categories) {
    const innerDiameterMatch = cat.match(/^inner-diameter-(\d+(?:\.\d+)?)$/);
    const outerDiameterMatch = cat.match(/^outer-diameter-(\d+(?:\.\d+)?)$/);
    const widthBearingMatch = cat.match(/^width-(\d+(?:\.\d+)?)$/);
    const sizeMatch = cat.match(/^size-((?:\d+(?:\.\d+)?x)*\d+(?:\.\d+)?)$/);
    console.log("sizeMatch: ", sizeMatch);
    console.log("widthBearingMatch: ", widthBearingMatch);
    if (innerDiameterMatch) {
      paramsToSend.innerDiameter = innerDiameterMatch[1];
    } else if (outerDiameterMatch) {
      paramsToSend.outerDiameter = outerDiameterMatch[1];
    } else if (widthBearingMatch) {
      paramsToSend.widthBearing = widthBearingMatch[1];
    } else if (sizeMatch) {
      paramsToSend.size = sizeMatch[1];
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
  return { allPartsFound, paramsToSend };
};
