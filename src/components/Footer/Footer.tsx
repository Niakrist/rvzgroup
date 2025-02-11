"use client";
import React from "react";
import {
  GetPriceModal,
  ThanksModal,
  FilterModal,
  MenuMobile,
  ModalMenu,
  FooterDown,
  FooterUp,
} from "@/components";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterUp />
      <FooterDown />
      <ModalMenu />
      <GetPriceModal />
      <ThanksModal />
      <FilterModal />
      <MenuMobile />
    </footer>
  );
};
