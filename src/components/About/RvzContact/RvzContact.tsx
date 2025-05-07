import { Htag, MapYandex } from "@/ui";
import React from "react";
import styles from "./RvzContact.module.css";

const RvzContact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag tag="h2" className={styles.mb} size="medium">
              Контакты
            </Htag>
            <address className={styles.adress}>
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
                Ленинградская область, м.р-н Всеволожский, г.п. Заневское, п.
                ж/д ст. Мяглово, тер. Соржа-Старая Производно Складская Зона,
                проезд 1-Й, здание 10.
              </p>
            </address>
          </div>
          <MapYandex />
        </div>
      </div>
    </section>
  );
};

export default RvzContact;
