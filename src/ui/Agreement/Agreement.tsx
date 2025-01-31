"use client";
import React, { useState } from "react";
import { Icon } from "@/components";
import cn from "classnames";

import styles from "./Agreement.module.css";
import { IAgreementProps } from "./Agreement.props";
export const Agreement: React.FC<IAgreementProps> = ({ color }) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <>
      <input
        className={styles.checkbox}
        checked={isCheck}
        onChange={() => setIsCheck(!isCheck)}
        id="agreement"
        type="checkbox"
        name=""
      />
      <label className={cn(styles.label, styles[color])} htmlFor="agreement">
        <div className={styles.iconCheckbox}>
          {isCheck && <Icon name="iconCheckbox" className={styles.icon} />}
        </div>
        Нажимая на кнопку, вы подписываетесь на рассылку и соглашаетесь с
        условиями оферты и политикой конфиденциальности
      </label>
    </>
  );
};
