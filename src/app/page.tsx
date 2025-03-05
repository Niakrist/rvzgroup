import {
  AboutCompany,
  Advantage,
  CategoryBlock,
  PopularProduct,
  PromoSlider,
  Subscribe,
  WeWork,
} from "@/components";

export default function Home() {
  return (
    <main>
      <PromoSlider />
      <CategoryBlock />
      {/* <PopularProduct /> */}
      <Advantage />
      <AboutCompany />
      <WeWork />
      <Subscribe />
    </main>
  );
}
