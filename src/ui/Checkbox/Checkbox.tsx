"use client";
import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.css";
import { Icon } from "@/components";
import { ICheckboxProps } from "./Checkbox.props";

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  isCheck,
  children,
  handleCheck,
}) => {
  return (
    <>
      <input
        id={id}
        onChange={() => handleCheck(id)}
        checked={isCheck}
        className={styles.checkbox}
        type="checkbox"
      />
      <label
        className={cn(styles.label, { [styles.check]: isCheck })}
        htmlFor={id}>
        <div
          className={cn(styles.iconCheckbox, {
            [styles.check]: isCheck,
          })}>
          <Icon name="iconCheckbox" className={styles.icon} />
        </div>
        {children}
      </label>
    </>
  );
};
