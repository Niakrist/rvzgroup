import React from "react";
import { Htag, Text, WrapperSection } from "@/ui";
import styles from "./RvzGroup.module.css";

export const RvzGroup = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h1" className={styles.mb} size="large">
            РВЗ групп
          </Htag>
          <Text className={styles.text} tag="p" size="medium">
            Это не просто компания, а команда единомышленников, которые с 2015
            года связали свою жизнь с производством и поставками подшипников.
            То, что начиналось как предпринимательская идея, переросло в нашу
            общую страсть. Мы ценим каждого нашего партнера как члена большой
            семьи и чувствуем огромную ответственность за качество нашей
            продукции. Наша цель – сделать бренд РВЗ гарантом надежности и
            долговечности, стандартом, которому доверяют. Именно это стремление
            ведет нас вперед и заставляет постоянно совершенствоваться.
          </Text>
          <Htag tag="h2" className={styles.mb} size="small">
            Что нами движет:
          </Htag>

          <div className={styles.block}>
            <Text tag="p" size="large">
              Ценности:
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Качество, Надежность, Инновации, Профессионализм, Ответственность,
              Развитие, Партнерство, Открытость.
            </Text>
          </div>

          <div className={styles.block}>
            <Text tag="p" size="large">
              Миссия:
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Обеспечивать промышленные предприятия высококачественными и
              надежными подшипниками, способствуя их развитию.
            </Text>
          </div>
          <div className={styles.block}>
            <Text tag="p" size="large">
              Видение:
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Стать ведущим производителем и поставщиком подшипников в России и
              СНГ, признанным за качество, инновации и сервис.
            </Text>
          </div>
        </div>
        <img className={styles.img} src="./rvz-about.jpg" alt="" />
      </div>
    </WrapperSection>
  );
};
