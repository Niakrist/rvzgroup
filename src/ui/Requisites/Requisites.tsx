import React from "react";
import { Htag } from "../Htag/Htag";
import styles from "./Requisites.module.css";

export const Requisites = () => {
  return (
    <>
      <Htag className={styles.mt} size="large" tag="h2">
        Реквизиты компании
      </Htag>
      <address className={styles.address}>
        <p>Наименование:</p>
        <p>ООО "РВЗ ГРУПП"</p>
        <p>ИНН:</p>
        <p>4706084345</p>
        <p>КПП:</p>
        <p>470601001</p>
        <p>ОГРН:</p>
        <p>1244700034534</p>
      </address>
    </>
  );
};
