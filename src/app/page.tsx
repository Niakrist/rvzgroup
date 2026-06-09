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

export default async function Home() {
  const paramsForPopularProduct = new URLSearchParams({
    popular: "true",
  });

  const popularProducts = await getProductsWithoutPagination(paramsForPopularProduct);

  console.log("popularProducts: ", popularProducts);

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
