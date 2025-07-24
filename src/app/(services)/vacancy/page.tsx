import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "РВЗ Групп: Работа в команде профессионалов при достойной зарплате",
  description:
    "РВЗ Групп – надежный работодатель, предлагающий стабильную работу и возможности карьерного роста. Смотрите наши вакансии и отправляйте резюме.",
};

const Vacancy = () => {
  return <div className={styles.rvz}>Vacancy</div>;
};

export default Vacancy;
