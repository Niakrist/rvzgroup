"use client";
import React from "react";
import {
  GetPriceModal,
  ThanksModal,
  FilterModal,
  ModalMenu,
  FooterDown,
  FooterUp,
  MenuBurger,
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
      <MenuBurger />
    </footer>
  );
};
