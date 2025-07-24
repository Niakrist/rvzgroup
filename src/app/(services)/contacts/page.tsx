import { ADDRESS, EMAIL_SALES, PHONE_SPB } from "@/constants/contacts";
import { Htag, MapYandex, WrapperSection, Contact, Requisites } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Контакты РВЗ Групп: Подшипники от производителя | Разумный Выбор Запчастей",
  description: `Контактную информацию РВЗ Групп - тел: ${PHONE_SPB}, e-mail: ${EMAIL_SALES}, адрес офиса и склада: ${ADDRESS}`,
};

const Contacts = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag tag="h1" size="large">
          Контакты
        </Htag>
        <Contact className={styles.margin} />
        <Requisites />
        <MapYandex />
      </div>
    </WrapperSection>
  );
};

export default Contacts;
