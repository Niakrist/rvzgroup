import React from "react";
import { Htag, Text } from "@/ui";
import styles from "./Advantage.module.css";
import Image from "next/image";

export const Advantage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag tag="h2" size="medium">
          Преимущества
        </Htag>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/brand.png"
              alt="Бренд РВЗ"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Собственный бренд РВЗ
              </Text>
              <Text weight="normal" tag="p" size="small">
                Мы дорожим своим именем и поставляем только качественную
                продукцию по конкурентным ценам.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/factory.png"
              alt="Производство"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Производство
              </Text>
              <Text weight="normal" tag="p" size="small">
                Наличие производственных мощностей позволяет нам держать самые
                привлекательные цены на рынке, так как мы продукцию не
                перекупаем, а производим
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/gost.png"
              alt="ГОСТ 520-2011"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                ГОСТ 520-2011
              </Text>
              <Text weight="normal" tag="p" size="small">
                Качество и маркировка продукции полностью соответствует ГОСТ
                520-2011.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/certificate.png"
              alt="Сертификаты и паспорта"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Сертификаты и паспорта
              </Text>
              <Text weight="normal" tag="p" size="small">
                Вся продукция поставляется с сертификатами и паспортами
                качества.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/warehouse.png"
              alt="Большой склад"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Большой склад
              </Text>
              <Text weight="normal" tag="p" size="small">
                Более 10 000 единиц товара на складе.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/assortment.png"
              alt="Ассортимент"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Расширение ассортимента
              </Text>
              <Text weight="normal" tag="p" size="small">
                Наша компания регулярно работает над расширением ассортимента,
                увеличивая складские ресурсы и перечень поставляемой
                номенклатуры.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/conditions.png"
              alt="Индивидуальные условия"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Индивидуальные условия
              </Text>
              <Text weight="normal" tag="p" size="small">
                Мы предлагаем индивидуальные условия для наших клиентов, мы
                заинтересованы только в взаимовыгодном партнерстве.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/expert.png"
              alt="Экспертность"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Экспертность
              </Text>
              <Text weight="normal" tag="p" size="small">
                В нашей команде только высококвалифицированные сотрудники,
                которые проходят регулярные обучения.
              </Text>
            </div>
          </li>
          <li className={styles.item}>
            <Image
              width={50}
              height={50}
              className={styles.img}
              src="/icons/service.png"
              alt="Высокий уровень сервиса"
            />
            <div>
              <Text className={styles.mb} weight="medium" tag="p" size="small">
                Высокий уровень сервиса
              </Text>
              <Text weight="normal" tag="p" size="small">
                Для наших клиентов мы предлагаем комплекс услуг - отсрочка
                платежа, бесплатная доставка - чтобы сотрудничество с нами
                приносило не только прибыль, но и удовольствие от работы.
              </Text>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
