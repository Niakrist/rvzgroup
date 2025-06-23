import { Htag, Text, WrapperSection } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Подшипники бренд РВЗ",
};

const BrandRvz = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag className={styles.margin} tag="h1" size="large">
          Подшипники РВЗ — Разумный Выбор Запчастей
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Бренд РВЗ (Разумный Выбор Запчастей) — это российская торговая марка,
          под которой поставляются надежные подшипники для различных отраслей
          промышленности. С 2015 года компания успешно развивает производство,
          предлагая клиентам широкий ассортимент продукции, сочетающей в себе
          высокое качество, долговечность и доступную цену.
        </Text>

        <div className={styles.block}>
          <div className={styles.content}>
            <Htag className={styles.margin} tag="h2" size="large">
              История и развитие бренда РВЗ
            </Htag>
            <Text className={styles.text} tag="p" size="medium">
              Бренд РВЗ был зарегистрирован в 2015 году. Начиная с серийного
              производства шариковых радиальных подшипников, компания поставила
              перед собой цель – предложить рынку качественную продукцию по
              доступной цене. Успешное тестирование в лабораториях и
              положительные отзывы партнеров с предприятий и заводов позволили
              расширить производственную линию и увеличить объемы выпуска.
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Сегодня РВЗ – это динамично развивающийся бренд, выпускающий
              десятки тысяч подшипников различных модификаций ежемесячно.
              Компания активно расширяет ассортимент и рынки сбыта, завоевывая
              доверие клиентов благодаря высокому качеству продукции и
              конкурентным ценам.
            </Text>
            <Htag className={styles.margin} tag="h2" size="large">
              Производство и контроль качества
            </Htag>
            <Text className={styles.text} tag="p" size="medium">
              Производство подшипников РВЗ расположено в Малайзии, что позволяет
              сочетать высокое качество с конкурентной ценой. Мы используем
              современное оборудование и постоянно совершенствуем
              технологические процессы.
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Каждая партия подшипников проходит многоступенчатый контроль:
            </Text>
            <ul className={styles.list}>
              <Text className={styles.item} tag="li" size="medium">
                Проверка твердости материала;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Контроль радиальных и осевых зазоров;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Измерение геометрических размеров;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Анализ структуры металла.
              </Text>
            </ul>
            <Text className={styles.text} tag="p" size="medium">
              Такой комплексный подход гарантирует соответствие продукции
              заявленным характеристикам.
            </Text>
          </div>
          <img
            className={styles.img}
            src="/certificate.jpg"
            alt="Свидетельство о регистрации бренда РВЗ"
          />
        </div>
        <div className={styles.block}>
          <img
            className={styles.img}
            src="/sert.jpg"
            alt="Сертификат соответствия"
          />
          <div className={styles.content}>
            <Htag className={styles.margin} tag="h2" size="large">
              Преимущества подшипников
            </Htag>
            <Text className={styles.text} tag="p" size="medium">
              Подшипники РВЗ сочетают в себе все необходимые качества для
              надежной работы в промышленных условиях. Мы уделяем особое
              внимание точности изготовления и долговечности продукции.
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Ключевые преимущества:
            </Text>
            <ul className={styles.list}>
              <Text className={styles.item} tag="li" size="medium">
                Полное соответствие ГОСТ 520-2011 и международным стандартам;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Оптимальное соотношение цены и качества;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Широкий ассортимент для различных отраслей;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Подтвержденное документами качество;
              </Text>
            </ul>
            <Text className={styles.text} tag="p" size="medium">
              Эти факторы делают нашу продукцию выгодным выбором для
              промышленных предприятий.
            </Text>
            <Htag className={styles.margin} tag="h2" size="large">
              Развитие и перспективы
            </Htag>
            <Text className={styles.text} tag="p" size="medium">
              За всё время работы на рынке бренд РВЗ зарекомендовал себя как
              надежный поставщик подшипниковой продукции. Мы постоянно работаем
              над расширением ассортимента и улучшением характеристик
              выпускаемых подшипников.
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              В ближайших планах компании - дальнейшее развитие дилерской сети и
              выход на новые рынки. Мы стремимся сделать продукцию РВЗ доступной
              для предприятий всех регионов России и стран СНГ, продолжая при
              этом повышать стандарты качества.
            </Text>
          </div>
        </div>

        <Htag className={styles.margin} tag="h2" size="large">
          Почему клиенты выбирают РВЗ
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Предприятия выбирают подшипники РВЗ за стабильное качество и
          надежность. Мы понимаем, что для промышленных производств важна
          бесперебойная работа оборудования.
        </Text>
        <Text className={styles.text} tag="p" size="medium">
          Преимущества сотрудничества:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            Гарантированное качество, подтвержденное сертификатами;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Профессиональные консультации по подбору подшипников;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Гибкие условия поставок для оптовых покупателей;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            Постпродажная поддержка и техническое сопровождение.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          Мы готовы предложить индивидуальный подход к каждому клиенту,
          обеспечивая надежные поставки качественных подшипников. РВЗ - это
          разумный выбор для вашего производства. Мы гарантируем качество каждой
          поставки и готовы подтвердить это документально.
        </Text>

        <div className={styles.block}>
          <div className={styles.content}>
            <Htag className={styles.margin} tag="h2" size="large">
              Сферы применения
            </Htag>
            <Text className={styles.text} tag="p" size="medium">
              Подшипники РВЗ успешно используются в самых разных отраслях
              промышленности. Наша продукция доказала свою надежность в условиях
              интенсивной эксплуатации.
            </Text>
            <Text className={styles.text} tag="p" size="medium">
              Основные сферы применения:
            </Text>
            <ul className={styles.list}>
              <Text className={styles.item} tag="li" size="medium">
                Энергетика и тяжелое машиностроение;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Железнодорожный и автомобильный транспорт;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Судостроение и сельскохозяйственная техника;
              </Text>
              <Text className={styles.item} tag="li" size="medium">
                Производственные линии и конвейерные системы.
              </Text>
            </ul>
            <Text className={styles.text} tag="p" size="medium">
              Это подтверждает универсальность и высокие эксплуатационные
              характеристики нашей продукции.
            </Text>
          </div>
          <img className={styles.img} src="/pasp.jpg" alt="Паспорт качества" />
        </div>
      </div>
    </WrapperSection>
  );
};
export default BrandRvz;
