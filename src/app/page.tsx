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

  const popularProducts = await getProductsWithoutPagination(
    paramsForPopularProduct
  );

  if (!!!popularProducts.length) return <div>Загрузка</div>;
  return (
    <main>
      <PromoSlider />
      <CategoryBlock />
      {!!popularProducts.length && (
        <PopularProduct products={popularProducts} />
      )}
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </main>
  );
}
