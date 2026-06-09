import React from "react";
import styles from "./CharacteristicList.module.css";
import { IBearing } from "@/types/bearing";
import Link from "next/link";
import Image from "next/image";

interface ICharacteristicListProps {
  bearingItem: IBearing;
  type: "characteristic" | "content" | "delivery" | "guarantee";
  showAll?: true;
}

const getStandart = (standart: number): string => {
  if (standart === 1) {
    return "ГОСТ";
  } else {
    return "ISO";
  }
};

const getBearingDesign = (id: number): string => {
  switch (id) {
    case 1:
      return "Миниатюрный";
    case 2:
      return "Самоустанавливающийся";
    case 3:
      return "Сферический";
    case 4:
      return "Комбинированный";
    case 5:
      return "Конический";
    case 6:
      return "Корпусный узел";
    case 7:
      return "Шарнирные";
    default:
      return "";
  }
};

const getBearingSeal = (id: number): string => {
  switch (id) {
    case 1:
      return "RS";
    case 2:
      return "Z";
    case 3:
      return "2RS";
    case 4:
      return "ZZ";
    default:
      return "";
  }
};

const getBearingType = (id: number): string => {
  switch (id) {
    case 1:
      return "Качения";
    case 2:
      return "Скольжения";
    default:
      return "";
  }
};

export const CharacteristicList = ({
  bearingItem,
  type,
  showAll,
}: ICharacteristicListProps): React.JSX.Element => {
  if (!bearingItem) return <div>Загрузка...</div>;

  switch (type) {
    case "characteristic":
      return (
        <ul className={styles.characteristic}>
          <li className={styles.item}>
            <span className={styles.key}>Бренд</span>
            <span className={styles.value}>{bearingItem.brand}</span>
          </li>
          {bearingItem.standartId && (
            <li className={styles.item}>
              <span className={styles.key}>Стандарт</span>
              <span className={styles.value}>{getStandart(bearingItem.standartId)}</span>
            </li>
          )}
          <li className={styles.item}>
            <span className={styles.key}>Внутренний диаметр (мм)</span>
            <span className={styles.value}>{bearingItem.innerDiameter}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Наружный диаметр (мм)</span>
            <span className={styles.value}>{bearingItem.outerDiameter}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Ширина (мм)</span>
            <span className={styles.value}>{bearingItem.widthBearing}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Аналог </span>
            <span className={styles.value}>
              {bearingItem.analog ? (
                <Link className={styles.analogLink} href={bearingItem.analogUrl}>
                  Подшипник {bearingItem.analog}
                </Link>
              ) : (
                "отсутствует"
              )}
            </span>
          </li>
          {showAll && (
            <>
              <li className={styles.item}>
                <span className={styles.key}>Масса (кг)</span>
                <span className={styles.value}>{bearingItem.weight}</span>
              </li>
              {!!bearingItem.size && (
                <li className={styles.item}>
                  <span className={styles.key}>Размеры (мм)</span>
                  <span className={styles.value}>{bearingItem.size}</span>
                </li>
              )}
              {!!bearingItem.bearingDesignId && (
                <li className={styles.item}>
                  <span className={styles.key}>Тип</span>
                  <span className={styles.value}>
                    {getBearingDesign(bearingItem.bearingDesignId)}
                  </span>
                </li>
              )}
              {!!bearingItem.bearingSealId && (
                <li className={styles.item}>
                  <span className={styles.key}>Заглушка</span>
                  <span className={styles.value}>{getBearingSeal(bearingItem.bearingSealId)}</span>
                </li>
              )}
              {!!bearingItem.bearingTypeId && (
                <li className={styles.item}>
                  <span className={styles.key}>Тела</span>
                  <span className={styles.value}>{getBearingType(bearingItem.bearingTypeId)}</span>
                </li>
              )}
            </>
          )}
        </ul>
      );
    case "content":
      return (
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: bearingItem.content }} />
      );
    case "guarantee":
      return (
        <div className={styles.content}>
          <p>
            Мы гарантируем высочайшее качество нашей продукции. Каждая партия подшипников
            изготавливается в строгом соответствии с требованиями ГОСТ 520-2011 и проходит
            многоступенчатый контроль.
          </p>
          <ul>
            <li>
              <strong>Стандарт ГОСТ 520-2011:</strong> Наша продукция производится в точном
              соответствии с этим межгосударственным стандартом. Это обеспечивает стабильность
              размеров, требуемую твердость, износостойкость и долговечность подшипников;
            </li>
            <li>
              <strong>Полный пакет документов:</strong> К каждой продукция имеется паспорт изделия,
              а также сертификат соответствия, подтверждающий, что продукция прошла все этапы
              входного и выходного контроля;
            </li>
            <li>
              <strong>Прямые поставки с завода:</strong> Вы покупаете подшипники напрямую от
              производителя, минуя посредников. Это гарантирует подлинность продукции, ее
              сохранность и лучшую цену.
            </li>
          </ul>

          <div className={styles.imgWrapper}>
            <Image
              width={400}
              height={400}
              className={styles.img}
              src="/pasp.jpg"
              alt="Паспорт качества"
            />
            <Image
              width={300}
              height={300}
              className={styles.img}
              src="/sert.jpg"
              alt="Сертификат соответствия"
            />
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.content}>
          <p> Возможны следующие варианты получения груза:</p>
          <ul>
            <li>Бесплатная доставка до терминала выбранной транспортной компании;</li>
            <li>
              Отправка в регионы России любой транспортной компание, как до терминала, так и до
              конечного адреса;
            </li>
            <li>Бесплатная доставка в пределах Санкт-Петербургу и Ленинградской области;</li>{" "}
            <li>Бесплатная доставка в пределах Санкт-Петербургу и Ленинградской области</li>
            <li>Самовывоз со склада в Санкт-Петербурге.</li>
          </ul>
          <p> Возможны следующие варианты оплаты товара:</p>
          <ul>
            <li>Наличный расчет;</li>
            <li>Безналичный расчет;</li>
            <li>Отсрочка платежа.</li>
          </ul>
        </div>
      );
  }
};
