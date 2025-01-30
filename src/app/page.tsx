import {
  AboutCompany,
  Advantage,
  CategoryList,
  PopularProduct,
  PromoSlider,
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
    </main>
  );
}
