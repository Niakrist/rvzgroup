"use client";
import React, { useState } from "react";
import { Agreement, Button, Htag } from "@/ui";
import styles from "./Subscribe.module.css";
import Image from "next/image";

export const Subscribe = () => {
  const [isCheck, setIsCheck] = useState<boolean>(true);

  const handleChange = (check: boolean): void => {
    setIsCheck(!check);
  };

  const handleClick = () => {};

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag tag="h2" size="medium">
              Будьте в курсе последних новостей и акций
            </Htag>

            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Электронная почта"
              />

              <Button
                onClick={handleClick}
                className={styles.button}
                bgColor="blue"
                size="small"
                color="whiteText"
                disabled={!isCheck}>
                Подписаться
              </Button>

              <div className={styles.agreement}>
                <Agreement
                  isCheck={isCheck}
                  handleChange={handleChange}
                  id="subscribe"
                  color="grey"
                />
              </div>
            </form>
          </div>
          <div className={styles.img}>
            <Image
              width={653}
              height={381}
              src="/subscribe.jpg"
              alt="Подписка"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
