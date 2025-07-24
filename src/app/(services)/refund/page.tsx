import { Htag, Text, WrapperSection } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Возврат и обмен подшипников РВЗ: Условия и порядок | rvzgroup.ru",
  description:
    "Ознакомьтесь с политикой возврата и обмена подшипников РВЗ. Подробная информация об условиях, сроках и порядке возврата подшипников “Разумный Выбор Запчастей”.",
};

const RefundPage = () => {
  return (
    <WrapperSection bgSection="grey">
      <div className={styles.wrapper}>
        <Htag className={styles.mb} size="large" tag="h1">
          Возврат и обмен продукции
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Мы ценим наших клиентов и стремимся к долгосрочному и взаимовыгодному
          сотрудничеству. В случае возникновения претензий к качеству
          поставленной продукции, мы всегда готовы оперативно рассмотреть вашу
          заявку и найти оптимальное решение.
        </Text>
        <Htag className={styles.mb} size="large" tag="h2">
          Порядок обращения с претензией
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          Свяжитесь с личным менеджером, который курировал вашу отгрузку. Это
          можно сделать устно по телефону или письменно по электронной почте.
          Менеджер уточнит детали проблемы и поможет корректно оформить
          претензию.
        </Text>
        <Text className={styles.text} tag="p" size="medium">
          Для официального рассмотрения претензии необходимо предоставить
          письменное обращение. Претензия должна быть составлена на фирменном
          бланке вашей организации, подписана уполномоченным лицом и заверена
          печатью.
        </Text>
        <Htag className={styles.mb} size="large" tag="h2">
          Подготовка письменной претензии
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          В документе следует подробно описать выявленные недостатки:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            опишите выявленный дефект, неисправность или несоответствие качества
            товара;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            укажите, при каких условиях был выявлен дефект.
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            приложите фотографии товара
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            результаты проведенных исследований (если проводились)
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          А также ваши пожелания по урегулированию ситуации (возврат средств,
          замена товара, компенсация).
        </Text>

        <Htag className={styles.mb} size="large" tag="h2">
          Рассмотрение претензии и принятие решения
        </Htag>
        <Text className={styles.text} tag="p" size="medium">
          После получения письменной претензии она будет рассмотрена в
          кратчайшие сроки. При необходимости может быть назначена экспертиза с
          участием независимых специалистов. Мы гарантируем возврат или обмен
          продукции ненадлежащего качества согласно действующему
          законодательству РФ.
        </Text>
        <Text className={styles.text} tag="p" size="medium">
          В случае подтверждения обоснованности претензии мы предложим один из
          вариантов решения:
        </Text>
        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            замену бракованной продукции на аналогичную надлежащего качества;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            возврат денежных средств за некачественный товар;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            согласование компенсации в виде скидки на текущую или будущую
            поставку.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          В соответствии с действующим законодательством РФ, гарантия на
          продукцию и возврат не распространяется в следующих случаях:
        </Text>

        <ul className={styles.list}>
          <Text className={styles.item} tag="li" size="medium">
            если продукция повреждена или уничтожена в результате порчи,
            неправильного или неосторожного обращения, хранения, использования
            не по назначению;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            если нарушены правила эксплуатации, транспортировки и хранения
            продукции;
          </Text>
          <Text className={styles.item} tag="li" size="medium">
            если продукция подверглась самостоятельному ремонту или модификации.
          </Text>
        </ul>
        <Text className={styles.text} tag="p" size="medium">
          По всем вопросам, связанным с возвратом и претензиями, вы можете
          обратиться к вашему личному менеджеру или связаться с нами по
          телефону.
        </Text>
      </div>
    </WrapperSection>
  );
};

export default RefundPage;
