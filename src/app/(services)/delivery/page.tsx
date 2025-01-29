import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Доставка и оплата",
};

const DeliveryAndPayment = () => {
  return <div className={styles.rvz}>DeliveryAndPayment</div>;
};

export default DeliveryAndPayment;
