"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@/components";
import { Button, Htag } from "@/ui";
import { RootState } from "@/store/store";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
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
      <Htag tag="h2" className={styles.title} position="center" size="medium">
        Спасибо за заказ!
      </Htag>
      <Button
        onClick={handleCloseModal}
        bgColor="blue"
        color="whiteText"
        size="big">
        На главную
      </Button>
    </Modal>
  );
};
