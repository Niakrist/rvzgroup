import { Htag } from "@/ui";
import React from "react";
import styles from "./RvzVision.module.css";

export const RvzVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag className={styles.mb} size="large">
              Видение РВЗ:
            </Htag>
            <ul>
              <li className={styles.item}>
                Стать ведущим производителем и поставщиком подшипников в России
                и странах СНГ, признанным за высокое качество продукции,
                инновационный подход и безупречный сервис.
              </li>
              <li className={styles.item}>
                Создать сильную и профессиональную команду, которая будет
                способна решать самые сложные задачи и обеспечивать стабильный
                рост компании.
              </li>
              <li className={styles.item}>
                Расширить географию продаж, выйти на новые рынки и закрепить
                позиции лидера в отрасли.
              </li>
              <li className={styles.item}>
                Внедрить передовые технологии и стандарты производства,
                обеспечивающие максимальную эффективность и экологичность
                процессов.
              </li>
              <li className={styles.item}>
                Быть компанией, которой доверяют клиенты, ценят сотрудники и
                уважают конкуренты.
              </li>
            </ul>
          </div>
          <img className={styles.img} src="./rvz-views.png" alt="" />
        </div>
      </div>
    </section>
  );
};
