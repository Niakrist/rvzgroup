import React from "react";
import { Htag, P, EmailCTA } from "@/ui";
import styles from "./ProfuctNotFound.module.css";

export const ProfuctNotFound = () => {
  return (
    <>
      <Htag className={styles.mb} size="small" tag="h2">
        К сожалению, по вашему запросу ничего не найдено
      </Htag>
      <P className={styles.mb} tag="p" size="medium">
        Попробуйте уточнить или изменить запрос. Если вам не удалось найти
        нужный товар, то свяжитесь с нами.
      </P>
      <P className={styles.mb} tag="p" size="medium">
        Наши специалисты всегда готовы помочь. Просто отправьте нам запрос, и мы
        постараемся подобрать для вас подходящий товар.
      </P>
      <EmailCTA bgColor="grey" />
    </>
  );
};
