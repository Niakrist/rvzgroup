import { Htag, MapYandex, WrapperSection, Contact } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты",
};

const Contacts = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag tag="h1" size="large">
          Контакты
        </Htag>
        <Contact className={styles.margin} />
        <MapYandex />
      </div>
    </WrapperSection>
  );
};

export default Contacts;
