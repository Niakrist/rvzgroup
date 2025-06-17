import { Htag, Text, WrapperSection } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Оплата",
};

const Payment = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag className={styles.mb} size="large" tag="h1">
          Гибкие варианты оплаты
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Мы понимаем, насколько важна гибкость и удобство в финансовых вопросах
          для наших клиентов. Поэтому мы предлагаем различные варианты оплаты,
          чтобы процесс сотрудничества был максимально комфортным.
        </Text>
        <Htag className={styles.margin} size="large" tag="h2">
          Наличный расчет
        </Htag>

        <Text className={styles.text} tag="p" size="medium">
          Для быстрых разовых покупок мы предлагаем простой способ оплаты:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Перевод на банковскую карту;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Мгновенное зачисление платежа;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Подтверждение оплаты в течение 15 минут.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Этот вариант идеально подходит для срочных заказов небольшого объема.
        </Text>

        <Htag className={styles.margin} size="large" tag="h2">
          Безналичный расчет
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Корпоративным клиентам мы предлагаем классический безналичный расчет:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Оплата по выставленному счету;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Работаем с НДС и без НДС;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Возможность оплаты через интернет-банк.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Все платежные документы оформляются в день совершения сделки.
        </Text>

        <Htag className={styles.margin} size="large" tag="h2">
          Специальные условия для постоянных партнеров
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Для клиентов с подписанным договором мы разработали расширенные
          финансовые условия.
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            <strong>Частичная отсрочка платежа (3-60 дней).</strong> 50%
            предоплата + 50% через согласованный срок или при получении товара;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            <strong>Полная отсрочка платежа (3-60 дней).</strong> Оплата всей
            суммы через согласованный период или индивидуальный график платежей;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            <strong>Товар под заказ.</strong> Привезем под заказ любую позицию
            при 100% предоплате.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Мы всегда готовы обсуждать индивидуальные условия для крупных и
          регулярных заказов. Для оформления договора и согласования особых
          условий обратитесь к вашему персональному менеджеру.
        </Text>

        <Htag className={styles.margin} size="large" tag="h2">
          Как оформить заказ?
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Процесс оформления заказа максимально прост и прозрачен:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Выберите удобный способ оплаты;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Согласуйте условия с менеджером;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Получите счет/договор;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Совершите оплату;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Подтвердите платеж.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Для постоянных клиентов мы разрабатываем персонализированные схемы
          сотрудничества, включая специальные условия оплаты и поставки.
        </Text>
      </div>
    </WrapperSection>
  );
};

export default Payment;
