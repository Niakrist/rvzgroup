import { Htag, Text } from "@/ui";
import React from "react";
import styles from "./RvzVision.module.css";

export const RvzVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag tag="h2" className={styles.mb} size="large">
              Видение РВЗ:
            </Htag>
            <ul>
              <Text className={styles.item} tag="li" size="medium">
                Стать ведущим производителем и поставщиком подшипников в России
                и странах СНГ, признанным за высокое качество продукции,
                инновационный подход и безупречный сервис.
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Создать сильную и профессиональную команду, которая будет
                способна решать самые сложные задачи и обеспечивать стабильный
                рост компании.
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Расширить географию продаж, выйти на новые рынки и закрепить
                позиции лидера в отрасли.
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Внедрить передовые технологии и стандарты производства,
                обеспечивающие максимальную эффективность и экологичность
                процессов.
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Быть компанией, которой доверяют клиенты, ценят сотрудники и
                уважают конкуренты.
              </Text>
            </ul>
          </div>
          <img className={styles.img} src="./rvz-views.png" alt="" />
        </div>
      </div>
    </section>
  );
};
