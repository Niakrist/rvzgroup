import { getProducts } from "@/api/getProducts";
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
  const products = await getProducts();

  const params = new URLSearchParams({
    popular: "true",
  });

  const popularProducts = await getProductsWithoutPagination(params);

  if (!products) return <div>Загрузка</div>;
  return (
    <main>
      <PromoSlider />
      <CategoryBlock />
      {!!popularProducts && <PopularProduct products={popularProducts} />}
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </main>
  );
}
