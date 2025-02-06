import React from "react";
import { GetPriceModal } from "../Modal/GetPriceModal/GetPriceModal";

import styles from "./Footer.module.css";
import FooterDown from "./FooterDown/FooterDown";

import FooterUp from "./FooterUp/FooterUp";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterUp />
      <FooterDown />
      <GetPriceModal />
    </footer>
  );
};
