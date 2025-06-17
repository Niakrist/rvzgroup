import React from "react";
import cn from "classnames";
import styles from "./Contact.module.css";

interface IContactPrsop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  className?: string;
}

export const Contact = ({ className, ...props }: IContactPrsop) => {
  return (
    <address {...props} className={cn(styles.adress, className)}>
      <p>Почта: </p>
      <a className={styles.link} href="mailto:sales@rvzgroup.ru">
        sales@rvzgroup.ru
      </a>

      <p>Телефон: </p>
      <a className={styles.link} href="tel:+78126428527">
        +7 812 642-85-27
      </a>

      <p>Адрес:</p>
      <p>
        Ленинградская область, м.р-н Всеволожский, г.п. Заневское, п. ж/д ст.
        Мяглово, тер. Соржа-Старая Производно Складская Зона, проезд 1-Й, здание
        10.
      </p>
    </address>
  );
};
