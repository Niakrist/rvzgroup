"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "../Menu/Menu";

import { Modal } from "../Modal/Modal";

import styles from "./MenuMobile.module.css";

export const MenuMobile = () => {
  const { isMenuForMobile } = useSelector(
    (state: RootState) => state.openModal
  );

  if (!isMenuForMobile) {
    return;
  }

  return (
    <Modal width="mobileMenu">
      <div className={styles.wrapper}>
        <Menu />
      </div>
    </Modal>
  );
};
