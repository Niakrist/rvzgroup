"use client";
import React from "react";
import { Icon } from "@/components";
import cn from "classnames";
import { IAgreementProps } from "./Agreement.props";
import styles from "./Agreement.module.css";
import Link from "next/link";

export const Agreement: React.FC<IAgreementProps> = ({ color, id, isCheck, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        checked={isCheck}
        onChange={() => handleChange(isCheck)}
        id={id}
        type="checkbox"
        name=""
      />
      <label className={cn(styles.label, styles[color])} htmlFor={id}>
        <div className={styles.iconCheckbox}>
          {isCheck && <Icon name="iconCheckbox" className={styles.icon} />}
        </div>
      </label>
      <p>
        Я соглашаюсь с{" "}
        <Link className={styles.link} href="/privacy">
          Политикой конфиденциальности
        </Link>{" "}
        и даю согласие на обработку моих персональных данных
      </p>
    </div>
  );
};
