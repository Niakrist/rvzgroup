"use client";
import React from "react";
import { ArticleInStock, Price, CharacteristicList } from "@/components";
import { Button, EmailCTA, Htag } from "@/ui";
import { IInfoCardProps } from "./InfoCard.props";
import styles from "./InfoCard.module.css";
import { CounterQuantityGroup } from "@/components/CounterQuantityGroup/CounterQuantityGroup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import { addInCommercialApplication } from "@/store/forCommercialApplicationSlice/forCommercialApplicationSlice";

export const InfoCard = ({ product }: IInfoCardProps): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);

  const handleGetCP = () => {
    dispatch(isGetPriceModal(!getPriceModal));
    dispatch(addInCommercialApplication({ product, count: 0 }));
  };

  if (!product) return <div>Загрузка InfoCard</div>;
  return (
    <div className={styles.content}>
      <Htag tag="h1" size="medium">
        Подшипник {product.name}
      </Htag>
      <ArticleInStock product={product} />
      <Price fontSize="fs18" product={product} />
      <CharacteristicList type="characteristic" bearingItem={product} />
      <div className={styles.buttonsGroup}>
        <CounterQuantityGroup product={product} />
        <Button
          onClick={handleGetCP}
          className={styles.button}
          bgColor="border"
          color="blackText"
          size="small">
          Получить КП в 1 клик
        </Button>
      </div>
      <EmailCTA bgColor="blue" />
    </div>
  );
};
