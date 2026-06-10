import { getProductsWithoutPagination } from "@/api/getProductsWithoutPagination";
import {
  AboutCompany,
  Advantage,
  CategoryBlock,
  PopularProduct,
  PromoSlider,
  Subscribe,
  WeWork,
} from "@/components";

// import dynamic from "next/dynamic";

// const AboutCompany = dynamic(() => import("@/components").then((mod) => mod.AboutCompany));
// const Advantage = dynamic(() => import("@/components").then((mod) => mod.Advantage));
// const WeWork = dynamic(() => import("@/components").then((mod) => mod.WeWork));
// const Subscribe = dynamic(() => import("@/components").then((mod) => mod.Subscribe));

export default async function Home() {
  const paramsForPopularProduct = new URLSearchParams({
    popular: "true",
  });

  const popularProducts = await getProductsWithoutPagination(paramsForPopularProduct);

  return (
    <>
      <PromoSlider />
      <CategoryBlock />
      {!popularProducts.length ? (
        <div>Загрузка...</div>
      ) : (
        <PopularProduct products={popularProducts} />
      )}
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </>
  );
}
