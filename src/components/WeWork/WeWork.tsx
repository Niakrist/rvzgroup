import React from "react";
import { Htag, Text } from "@/ui";
import styles from "./WeWork.module.css";

export const WeWork = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag tag="h2" size="medium">
          Как мы работаем
        </Htag>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>1</span>{" "}
            <Text tag="p" size="large">
              Оставляете заявку любым удобным способом
            </Text>
          </li>
          <li className={styles.item}>
            <span>2</span> <p>С Вами связывается наш менеджер</p>
          </li>
          <li className={styles.item}>
            <span>3</span> <p>Согласовываем номенклатуру и цены</p>
          </li>
          <li className={styles.item}>
            <span>4</span> <p>Определяемся со сроками и методом доставки</p>
          </li>
          <li className={styles.item}>
            <span>5</span> <p>Определяемся со сроками и методом доставки</p>
          </li>
          <li className={styles.item}>
            <span>6</span> <p>Принимайте подшипники РВЗ на складе</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
