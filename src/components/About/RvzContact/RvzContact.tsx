import { Htag, MapYandex, WrapperSection } from "@/ui";
import { Contact } from "@/ui/Contact/Contact";
import React from "react";
import styles from "./RvzContact.module.css";

const RvzContact = () => {
  return (
    <WrapperSection bgSection="white" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h2" className={styles.mb} size="medium">
            Контакты
          </Htag>
          <Contact />
        </div>
        <MapYandex />
      </div>
    </WrapperSection>
  );
};

export default RvzContact;
