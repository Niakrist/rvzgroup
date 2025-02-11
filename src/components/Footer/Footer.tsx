"use client";
import React from "react";
import { GetPriceModal } from "../Modal/GetPriceModal/GetPriceModal";
import { ThanksModal } from "../Modal/ThanksModal/ThanksModal";

import styles from "./Footer.module.css";
import FooterDown from "./FooterDown/FooterDown";

import FooterUp from "./FooterUp/FooterUp";
import { FilterModal } from "../Modal/FilterModal/FilterModal";
import ModalMenu from "../Modal/ModalMenu/ModalMenu";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterUp />
      <FooterDown />
      <ModalMenu />
      <GetPriceModal />
      <ThanksModal />
      <FilterModal />
    </footer>
  );
};
