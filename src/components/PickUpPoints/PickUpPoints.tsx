"use client";
import { Button, Htag, InputText } from "@/ui";
import styles from "./PickUpPoints.module.css";
import { pickUpPoints } from "./pickUpPoints";
import React, { useState } from "react";

export const PickUpPoints = () => {
  const [serchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClean = () => {
    setSearchTerm("");
  };

  const cropPick = serchTerm
    ? pickUpPoints.filter((pick) => pick.city.toLowerCase().includes(serchTerm.toLowerCase()))
    : pickUpPoints;

  return (
    <>
      <Htag className={styles.mt} size="large" tag="h2">
        Пункты выдачи
      </Htag>
      <div className={styles.wrapper}>
        <InputText
          onChange={handleSearch}
          value={serchTerm}
          type="email"
          placeholder="Введите город"
          className={styles.inputSearch}
        />
        <Button
          onClick={handleClean}
          bgColor="blue"
          color="whiteText"
          size="medium"
          className={styles.button}
        >
          Сбросить
        </Button>
      </div>

      <div className={styles.addresses}>
        {cropPick.length ? (
          cropPick.map((point) => (
            <div className={styles.card} key={point.address}>
              <div className={styles.city}>{point.city}</div>
              <div className={styles.street}>{point.address}</div>
            </div>
          ))
        ) : (
          <div className={styles.city}>Город не найден</div>
        )}
      </div>
    </>
  );
};
