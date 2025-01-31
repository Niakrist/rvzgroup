import {
  AboutCompany,
  Advantage,
  CategoryList,
  PopularProduct,
  PromoSlider,
  Subscribe,
  WeWork,
} from "@/components";

export default function Home() {
  return (
    <main>
      <PromoSlider />
      <CategoryList />
      <PopularProduct />
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </main>
  );
}
