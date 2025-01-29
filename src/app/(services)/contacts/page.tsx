import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты",
};

const Contacts = () => {
  return <section className={styles.rvz}>Contacts</section>;
};

export default Contacts;
