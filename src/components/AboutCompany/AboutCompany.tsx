import { Htag } from "@/ui";
import Link from "next/link";
import React from "react";
import cn from "classnames";

import styles from "./AboutCompany.module.css";

export const AboutCompany = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag size="medium">О компании</Htag>
            <p className={cn(styles.text, styles.textFirst)}>
              РВЗ групп - ваш надежный поставщик подшипников. Мы производим и
              поставляем широкий спектр подшипников по всей России, а также
              успешно развиваем продажи в странах СНГ, включая Белоруссию и
              Казахстан.
            </p>
            <p className={styles.text}>
              Наша компания придерживается высоких стандартов качества и строго
              соблюдает ГОСТ 520-2011. Мы постоянно инвестируем в развитие
              производства: расширяем ассортимент, набираем профильных
              специалистов, повышаем их квалификацию, внедряем современные
              технологии и проводим регулярные тесты качества на высокоточном
              оборудовании.
            </p>
            <p className={styles.text}>
              Независимые лабораторные проверки гарантируют соответствие наших
              материалов и их возможностей самым строгим требованиям. Выбирая
              РВЗ Групп, вы выбираете надежность и профессионализм.
            </p>
            <Link className={styles.link} href="/about">
              Подробнее
            </Link>
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src="./about.jpg" alt="О компании" />
          </div>
        </div>
      </div>
    </section>
  );
};
