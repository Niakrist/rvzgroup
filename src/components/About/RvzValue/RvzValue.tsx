import { Htag } from "@/ui";
import React from "react";
import styles from "./RvzValue.module.css";

export const RvzValue = () => {
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
                Качество. Мы стремимся к безупречному качеству нашей продукции,
                от сырья до готовых подшипников, и постоянно совершенствуем
                процессы контроля.
              </li>
              <li className={styles.item}>
                Надежность. Мы гарантируем надежность нашей продукции и
                поставок, строим долгосрочные партнерские отношения, основанные
                на доверии и стабильности.
              </li>
              <li className={styles.item}>
                Инновации. Мы постоянно ищем новые решения, внедряем современные
                технологии и стремимся к совершенствованию производственных
                процессов.
              </li>
              <li className={styles.item}>
                Профессионализм. Мы ценим опыт и знания наших сотрудников,
                инвестируем в их обучение и развитие, создавая команду
                профессионалов.
              </li>
              <li className={styles.item}>
                Ответственность. Мы осознаем свою ответственность перед
                клиентами, партнерами и обществом, соблюдаем высокие этические
                стандарты и требования безопасности.
              </li>
              <li className={styles.item}>
                Развитие. Мы стремимся к постоянному росту и развитию,
                расширению ассортимента, географии продаж и повышению
                эффективности нашей работы.
              </li>
              <li className={styles.item}>
                Партнерство. Мы выстраиваем долгосрочные, взаимовыгодные
                отношения с нашими клиентами и поставщиками, нацелены на
                совместный успех.
              </li>
              <li className={styles.item}>
                Открытость. Мы открыты к диалогу, готовы слушать наших клиентов
                и партнеров, и стремимся к прозрачности в нашей работе.
              </li>
            </ul>
          </div>
          <img className={styles.img} src="./rvz-value.png" alt="" />
        </div>
      </div>
    </section>
  );
};
