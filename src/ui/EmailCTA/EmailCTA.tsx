"use client";
import { EMAIL_SALES } from "@/constants/contacts";
import React, { useState } from "react";
import styles from "./EmailCTA.module.css";

import cn from "classnames";

interface IEmailCTAProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  bgColor: "blue" | "grey";
}

export const EmailCTA: React.FC<IEmailCTAProps> = ({ bgColor, ...props }) => {
  const [isEmailCopy, setIsEmailCopy] = useState<boolean>(false);

  const handleSaveEmail = async (copyText: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setIsEmailCopy(true);
    } catch (error) {
      console.error("Ошибка при копировании в буфер обмена:", error);
      alert("Не удалось скопировать email в буфер обмена.");
    } finally {
      setTimeout(() => {
        setIsEmailCopy(false);
      }, 3000);
    }
  };

  return (
    <address
      onClick={() => handleSaveEmail(EMAIL_SALES)}
      {...props}
      className={cn(styles.email, {
        [styles.bgBlue]: bgColor === "blue",
        [styles.bgGrey]: bgColor === "grey",
        [styles.copy]: isEmailCopy,
      })}>
      {isEmailCopy ? (
        <span>Почта скопирована</span>
      ) : (
        <span>Отправить заявку на почту</span>
      )}{" "}
      <span className={styles.emailAdress}>{EMAIL_SALES}</span>
    </address>
  );
};
