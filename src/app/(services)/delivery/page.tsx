import { Htag, Text, WrapperSection } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Доставка",
};

const DeliveryAndPayment = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag className={styles.mb} size="large" tag="h1">
          Доставка — удобные и выгодные условия
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Мы предлагаем комплексные логистические решения для клиентов из России
          и стран СНГ. Наши условия доставки разработаны с учетом потребностей
          промышленных предприятий.
        </Text>
        <Htag className={styles.mb} size="large" tag="h2">
          Самовывоз со склада в Санкт-Петербурге
        </Htag>

        <Text className={styles.text} tag="p" size="medium">
          Можно забрать заказ самостоятельно. Наш склад оборудован всем
          необходимым для комфортного самовывоза:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Адрес склада: Ленинградская область, м.р-н Всеволожский, г.п.
            Заневское, п. ж/д ст. Мяглово, тер. Соржа-Старая Производно
            Складская Зона, проезд 1-Й, здание 10.
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            График работы самовывоза: с 8:30 до 16:30 (понедельник-пятница)
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Необходимо предварительно согласовать время визита
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Для вашего удобства на территории складского комплекса мы
          предусмотрели бесплатную парковку и зону погрузки.
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Бесплатная доставка в пределах СПб и Ленинградской области
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Для наших клиентов мы предлагаем выгодные условия доставки. Наш
          транспорт ежедневно курсирует по городу и области:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            По всем районам Санкт-Петербурга — бесплатно
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            В любые населенные пункты Ленинградской области — бесплатно
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            До терминалов транспортных компаний — бесплатно
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Доставка осуществляется в течение 1-2 рабочих дней после подтверждения
          заказа.
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Отправка в регионы России
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Мы сотрудничаем <strong>со всеми транспортными компаниями</strong>,
          что позволяет предлагать клиентам оптимальные условия:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Возможна бесплатная доставка до вашего города
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Бесплатная доставка до любого терминала ТК в СПб
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Специальные условия для грузов отправляемых &quot;Деловыми
            линиям&quot; или &quot;Возовозом&quot;
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Наши логисты помогут выбрать самый экономичный маршрут для вашего
          груза.
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Сроки и условия отгрузки
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Мы ценим ваше время, поэтому максимально оптимизировали процесс
          отгрузки:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Стандартная отгрузка — на следующий рабочий день после получения
            оплаты
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Возможность срочной отгрузки в день оплаты (по согласованию)
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Все грузы тщательно упаковываются в соответствии с требованиями
            перевозчиков
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Для особо крупных партий разрабатываются индивидуальные логистические
          решения.
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Дополнительные услуги
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Чтобы сделать наше сотрудничество максимально комфортным, мы
          предлагаем:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Помощь в оформлении транспортной документации
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Возможность страхования груза при перевозке
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Консультации по выбору оптимального способа доставки
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Наши специалисты всегда готовы помочь в решении любых вопросов,
          связанных с доставкой.
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Как оформить доставку?
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Процесс организации доставки максимально прост и прозрачен:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Уточните условия доставки при оформлении заказа
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Согласуйте с менеджером удобный способ получения
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Получите подтверждение сроков отгрузки
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Отслеживайте статус доставки по предоставленным данным
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Для вашего удобства мы выделили персонального менеджера по логистике.
          Свяжитесь с нами, чтобы подобрать оптимальные условия доставки для
          вашего заказа! Наша команда всегда готова предложить индивидуальное
          решение, которое удовлетворит все ваши требования.
        </Text>
      </div>
    </WrapperSection>
  );
};

export default DeliveryAndPayment;
