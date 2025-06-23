import { Htag, Text, WrapperSection } from "@/ui";
import React from "react";
import styles from "./RvzValue.module.css";

export const RvzValue = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h2" className={styles.mb} size="large">
            Видение РВЗ:
          </Htag>
          <ul>
            <Text className={styles.item} tag="li" size="medium">
              Качество. Мы стремимся к безупречному качеству нашей продукции, от
              сырья до готовых подшипников, и постоянно совершенствуем процессы
              контроля.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Надежность. Мы гарантируем надежность нашей продукции и поставок,
              строим долгосрочные партнерские отношения, основанные на доверии и
              стабильности.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Инновации. Мы постоянно ищем новые решения, внедряем современные
              технологии и стремимся к совершенствованию производственных
              процессов.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Профессионализм. Мы ценим опыт и знания наших сотрудников,
              инвестируем в их обучение и развитие, создавая команду
              профессионалов.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Ответственность. Мы осознаем свою ответственность перед клиентами,
              партнерами и обществом, соблюдаем высокие этические стандарты и
              требования безопасности.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Развитие. Мы стремимся к постоянному росту и развитию, расширению
              ассортимента, географии продаж и повышению эффективности нашей
              работы.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Партнерство. Мы выстраиваем долгосрочные, взаимовыгодные отношения
              с нашими клиентами и поставщиками, нацелены на совместный успех.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Открытость. Мы открыты к диалогу, готовы слушать наших клиентов и
              партнеров, и стремимся к прозрачности в нашей работе.
            </Text>
          </ul>
        </div>
        <img className={styles.img} src="/rvz-value.png" alt="" />
      </div>
    </WrapperSection>
  );
};
