import { Htag } from "@/ui";
import React from "react";
import styles from "./RvzMission.module.css";

export const RvzMission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img className={styles.img} src="./rvz-mission.png" alt="" />
          <div className={styles.content}>
            <Htag className={styles.mb} size="large">
              Миссия РВЗ:
            </Htag>
            <ul>
              <li className={styles.item}>
                Обеспечивать промышленные предприятия России и стран СНГ
                высококачественными и надежными подшипниками, способствуя их
                бесперебойной работе и развитию.
              </li>
              <li className={styles.item}>
                Предоставлять нашим клиентам лучшие решения в области
                подшипниковой продукции, основанные на инновационных
                технологиях, высоком качестве и профессиональном обслуживании.
              </li>
              <li className={styles.item}>
                Быть надежным партнером, предлагающим стабильные поставки,
                широкий ассортимент и гибкие условия сотрудничества.
              </li>
              <li className={styles.item}>
                Постоянно совершенствоваться, развиваться и вносить вклад в
                развитие промышленности.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
