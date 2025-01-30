import {
  AboutCompany,
  Advantage,
  CategoryList,
  PopularProduct,
  PromoSlider,
} from "@/components";

export default function Home() {
  return (
    <main>
      <PromoSlider />
      <CategoryList />
      <PopularProduct />
      <Advantage />
      <AboutCompany />
    </main>
  );
}
