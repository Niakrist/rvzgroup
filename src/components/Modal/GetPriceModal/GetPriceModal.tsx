"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Agreement, Button, Htag, InputText } from "@/ui";
import { Modal } from "@/components";
import { useKeyPress } from "@/hooks/useKeayPress";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import styles from "./GetPriceModal.module.css";

export const GetPriceModal = () => {
  const dispatch = useDispatch();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);

  const handleCloseModal = () => {
    dispatch(isGetPriceModal(false));
  };

  useKeyPress("Escape", handleCloseModal);

  if (!getPriceModal) {
    return null;
  }

  return (
    <Modal width="medium">
      <button onClick={handleCloseModal} className={styles.close} />
      <Htag size="medium" position="center">
        Запрос цены! Куда вам прислать КП?
      </Htag>
      <form className={styles.form}>
        <InputText type="text" placeholder="Имя" />
        <InputText type="text" placeholder="Номер телефона" />
        <InputText type="text" placeholder="Название компании" />
        <InputText type="text" placeholder="Адрес доставки" />
        <Button bgColor="blue" color="whiteText" size="big">
          Получить КП
        </Button>
        <Agreement id="getPriceModal" color="grey" />
      </form>
    </Modal>
  );
};
