import React from "react";
import { ArticleInStock, Price, CharacteristicList } from "@/components";
import { Button, Htag } from "@/ui";
import { IInfoCardProps } from "./InfoCard.props";
import styles from "./InfoCard.module.css";
import { CounterQuantityGroup } from "@/components/CounterQuantityGroup/CounterQuantityGroup";

export const InfoCard = ({ product }: IInfoCardProps): React.JSX.Element => {
  if (!product) return <div>Загрузка InfoCard</div>;
  return (
    <div className={styles.content}>
      <Htag size="medium">Пошипник {product.name}</Htag>
      <ArticleInStock product={product} />
      <Price fontSize="fs18" product={product} />
      <CharacteristicList type="characteristic" bearingItem={product} />
      <div className={styles.buttonsGroup}>
        <CounterQuantityGroup product={product} />
        <Button
          className={styles.button}
          bgColor="border"
          color="blackText"
          size="small">
          Получить КП в 1 клик
        </Button>
      </div>
      <address className={styles.email}>
        Отправить заявку на почту{" "}
        <a
          className={styles.link}
          href="mailto:sales@rvzgroup.ru"
          target="_blank">
          sales@rvzgroup.ru
        </a>
      </address>
    </div>
  );
};
