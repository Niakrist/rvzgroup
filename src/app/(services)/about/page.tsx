import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "О Компании РВЗ Групп",
};

const About = () => {
  return <section className={styles.rvz}>About</section>;
};
export default About;
