import { Htag } from "@/ui";
import React from "react";
import styles from "./RvzGroup.module.css";

export const RvzGroup = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag className={styles.mb} size="large">
              РВЗ групп
            </Htag>
            <p className={styles.text}>
              Это не просто компания, а команда единомышленников, которые с 2015
              года связали свою жизнь с производством и поставками подшипников.
              То, что начиналось как предпринимательская идея, переросло в нашу
              общую страсть. Мы ценим каждого нашего партнера как члена большой
              семьи и чувствуем огромную ответственность за качество нашей
              продукции. Наша цель – сделать бренд РВЗ гарантом надежности и
              долговечности, стандартом, которому доверяют. Именно это
              стремление ведет нас вперед и заставляет постоянно
              совершенствоваться.
            </p>
            <Htag className={styles.mb} size="medium">
              Что нами движет:
            </Htag>

            <div className={styles.block}>
              <p className={styles.name}>Ценности:</p>
              <p className={styles.desc}>
                Качество, Надежность, Инновации, Профессионализм,
                Ответственность, Развитие, Партнерство, Открытость.
              </p>
            </div>

            <div className={styles.block}>
              <p className={styles.name}>Миссия:</p>
              <p className={styles.desc}>
                Обеспечивать промышленные предприятия высококачественными и
                надежными подшипниками, способствуя их развитию.
              </p>
            </div>
            <div className={styles.block}>
              <p className={styles.name}>Видение:</p>
              <p className={styles.desc}>
                Стать ведущим производителем и поставщиком подшипников в России
                и СНГ, признанным за качество, инновации и сервис.
              </p>
            </div>
          </div>
          <img className={styles.img} src="./rvz-about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
