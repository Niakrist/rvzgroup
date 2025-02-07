"use client";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import { Button, Htag } from "@/ui";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";
import styles from "./ThanksModal.module.css";

export const ThanksModal = () => {
  const { isThanksModal } = useSelector((state: RootState) => state.openModal);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCloseModal = () => {
    dispatch(toggleThanksModal(!isThanksModal));
    router.replace("/about");
  };

  if (!isThanksModal) {
    return null;
  }

  return (
    <Modal width="small">
      <Htag className={styles.title} position="center" size="medium">
        Спасибо за заказ!
      </Htag>
      <Button onClick={handleCloseModal} color="blue">
        На главную
      </Button>
    </Modal>
  );
};
