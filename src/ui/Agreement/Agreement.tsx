"use client";
import React from "react";
import { Icon } from "@/components";
import cn from "classnames";
import { IAgreementProps } from "./Agreement.props";
import styles from "./Agreement.module.css";

export const Agreement: React.FC<IAgreementProps> = ({
  color,
  id,
  isCheck,
  handleChange,
}) => {
  return (
    <>
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
        Нажимая на кнопку вы соглашаетесь с обработкой персональных данных и
        политикой конфиденциальности.
      </label>
    </>
  );
};
