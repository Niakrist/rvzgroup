import React from "react";
import { Agreement, Button, Htag } from "@/ui";
import styles from "./Subscribe.module.css";

export const Subscribe = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag size="medium">Будьте в курсе последних новостей и акций</Htag>

            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Электронная почта"
              />

              <Button
                className={styles.button}
                bgColor="blue"
                size="small"
                color="whiteText">
                Подписаться
              </Button>

              <div className={styles.agreement}>
                <Agreement id="subscribe" color="grey" />
              </div>
            </form>
          </div>
          <div className={styles.img}>
            <img src="./subscribe.jpg" alt="Подписка" />
          </div>
        </div>
      </div>
    </section>
  );
};
