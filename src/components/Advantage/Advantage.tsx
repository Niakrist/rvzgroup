import React from "react";
import { Htag } from "@/ui";
import styles from "./Advantage.module.css";

export const Advantage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag tag="h2" size="medium">
          Преимущества
        </Htag>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/brand.png"
              alt="Бренд РВЗ"
            />
            <div>
              <p className={styles.title}>Собственный бренд РВЗ</p>
              <p className={styles.text}>
                Мы дорожим своим именем и поставляем только качественную
                продукцию по конкурентным ценам.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/factory.png"
              alt="Производство"
            />
            <div>
              <p className={styles.title}>Производство</p>
              <p className={styles.text}>
                Наличие производственных мощностей позволяет нам держать самые
                привлекательные цены на рынке, так как мы продукцию не
                перекупаем, а производим
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/gost.png"
              alt="ГОСТ 520-2011"
            />
            <div>
              <p className={styles.title}>ГОСТ 520-2011</p>
              <p className={styles.text}>
                Качество и маркировка продукции полностью соответствует ГОСТ
                520-2011.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/certificate.png"
              alt="Сертификаты и паспорта"
            />
            <div>
              <p className={styles.title}>Сертификаты и паспорта</p>
              <p className={styles.text}>
                Вся продукция поставляется с сертификатами и паспортами
                качества.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/warehouse.png"
              alt="Большой склад"
            />
            <div>
              <p className={styles.title}>Большой склад</p>
              <p className={styles.text}>
                Более 10 000 единиц товара на складе.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/assortment.png"
              alt="Ассортимент"
            />
            <div>
              <p className={styles.title}>Расширение ассортимента</p>
              <p className={styles.text}>
                Наша компания регулярно работает над расширением ассортимента,
                увеличивая складские ресурсы и перечень поставляемой
                номенклатуры.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/conditions.png"
              alt="Индивидуальные условия"
            />
            <div>
              <p className={styles.title}>Индивидуальные условия</p>
              <p className={styles.text}>
                Мы предлагаем индивидуальные условия для наших клиентов, мы
                заинтересованы только в взаимовыгодном партнерстве.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/expert.png"
              alt="Экспертность"
            />
            <div>
              <p className={styles.title}>Экспертность</p>
              <p className={styles.text}>
                В нашей команде только высококвалифицированные сотрудники,
                которые проходят регулярные обучения.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.img}
              src="/icons/service.png"
              alt="Высокий уровень сервиса"
            />
            <div>
              <p className={styles.title}>Высокий уровень сервиса</p>
              <p className={styles.text}>
                Для наших клиентов мы предлагаем комплекс услуг - отсрочка
                платежа, бесплатная доставка - чтобы сотрудничество с нами
                приносило не только прибыль, но и удовольствие от работы.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
