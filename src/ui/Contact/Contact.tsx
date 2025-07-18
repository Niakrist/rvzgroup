import React from "react";
import cn from "classnames";
import styles from "./Contact.module.css";
import {
  ADDRESS,
  EMAIL_SALES,
  PHONE_SPB,
  PHONE_SPB_LINK,
} from "@/constants/contacts";

interface IContactPrsop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  className?: string;
}

export const Contact = ({ className, ...props }: IContactPrsop) => {
  return (
    <address {...props} className={cn(styles.address, className)}>
      <p>Почта: </p>
      <a className={styles.link} href={`mailto:${EMAIL_SALES}`}>
        {EMAIL_SALES}
      </a>
      <p>Телефон: </p>
      <a className={styles.link} href={`tel:${PHONE_SPB_LINK}`}>
        {PHONE_SPB}
      </a>
      <p>Адрес:</p>
      <p>{ADDRESS}</p>
      <p>Пн-чт:</p>
      <p>с 08:00 до 17:00 по московскому.</p>
      <p>Пт:</p> <p>с 08:00 до 16:30 по московскому.</p>
      <p>Сб-Вс:</p>
      <p>выходной.</p>
    </address>
  );
};
