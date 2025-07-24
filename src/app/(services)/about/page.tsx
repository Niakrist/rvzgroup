import { RvzGroup, RvzMission, RvzValue, RvzVision } from "@/components";
import RvzContact from "@/components/About/RvzContact/RvzContact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "О Компании РВЗ Групп",
  description:
    "РВЗ Групп - компания с многолетним опытом в производстве и поставке подшипников. Мы предлагаем надежные решения для вашего бизнеса и стремимся к долгосрочному партнерству.",
};

const About = () => {
  return (
    <>
      <RvzGroup />
      <RvzValue />
      <RvzMission />
      <RvzVision />
      <RvzContact />
    </>
  );
};
export default About;
