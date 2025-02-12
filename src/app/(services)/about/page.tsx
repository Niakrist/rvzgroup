import { RvzGroup, RvzMission, RvzValue, RvzVision } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "О Компании РВЗ Групп",
};

const About = () => {
  return (
    <>
      <RvzGroup />
      <RvzValue />
      <RvzMission />
      <RvzVision />
    </>
  );
};
export default About;
