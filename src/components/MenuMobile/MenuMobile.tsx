import React from "react";
import { Modal } from "../Modal/Modal";

import styles from "./MenuMobile.module.css";

const MenuMobile = () => {
  return (
    <Modal width="mobileMenu">
      <div className={styles.wrapper}></div>
    </Modal>
  );
};

export default MenuMobile;
