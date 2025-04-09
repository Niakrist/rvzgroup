import { getCategories } from "@/api/getCategories";
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
  const products = await getCategories();
  return (
    <main>
      <PromoSlider />
      <CategoryBlock />
      <PopularProduct products={products.rows} />
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </main>
  );
}
