"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Agreement, Button, Htag, InputText, Textarea } from "@/ui";
import { Modal, OrderForm } from "@/components";
import { useKeyPress } from "@/hooks/useKeayPress";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import styles from "./GetPriceModal.module.css";
import { clearCommercialApplication } from "@/store/forCommercialApplicationSlice/forCommercialApplicationSlice";
import { sendRequestByEmail } from "@/api/sendRequestByEmail";

export const GetPriceModal = () => {
  const dispatch = useDispatch();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);
  const { bearing } = useSelector(
    (state: RootState) => state.forCommercialApplication
  );

  const handleCloseModal = () => {
    dispatch(isGetPriceModal(false));
    dispatch(clearCommercialApplication());
  };

  useKeyPress("Escape", handleCloseModal);

  if (!getPriceModal) {
    return null;
  }

  console.log("bearing: ", bearing);

  return (
    <Modal width="medium">
      <button onClick={handleCloseModal} className={styles.close} />
      <Htag tag="h2" size="medium" position="center">
        Запрос цены! Куда вам прислать КП?
      </Htag>
      <OrderForm order={bearing} />
    </Modal>
  );
};
