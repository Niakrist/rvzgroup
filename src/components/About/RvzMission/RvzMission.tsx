import { Htag, Text, WrapperSection } from "@/ui";
import Image from "next/image";
import React from "react";
import styles from "./RvzMission.module.css";

export const RvzMission = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Image
          width={425}
          height={268}
          className={styles.img}
          src="/rvz-mission.png"
          alt="Миссия РВЗ групп"
        />
        <div className={styles.content}>
          <Htag tag="h2" className={styles.mb} size="large">
            Миссия РВЗ:
          </Htag>
          <ul>
            <Text className={styles.item} tag="li" size="medium">
              Обеспечивать промышленные предприятия России и стран СНГ
              высококачественными и надежными подшипниками, способствуя их
              бесперебойной работе и развитию.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Предоставлять нашим клиентам лучшие решения в области
              подшипниковой продукции, основанные на инновационных технологиях,
              высоком качестве и профессиональном обслуживании.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Быть надежным партнером, предлагающим стабильные поставки, широкий
              ассортимент и гибкие условия сотрудничества.
            </Text>
            <Text className={styles.item} tag="li" size="medium">
              Постоянно совершенствоваться, развиваться и вносить вклад в
              развитие промышленности.
            </Text>
          </ul>
        </div>
      </div>
    </WrapperSection>
  );
};
