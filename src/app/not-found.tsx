import { categoryList } from "@/constants/category-list";
import { Button, EmailCTA, Htag, P, WrapperSection } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <WrapperSection className={styles.section} bgSection="grey">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h1" size="large">
            Страница не найдена! Ошибка 404
          </Htag>

          <Htag tag="h2" size="small">
            Популярные категории
          </Htag>
          <ul className={styles.list}>
            {categoryList.map((category) => (
              <P
                key={category.path}
                size="medium"
                tag="li"
                className={styles.item}>
                <Link href={category.path}>{category.name}</Link>
              </P>
            ))}
          </ul>
          <EmailCTA bgColor="blue" />

          <div className={styles.home}>
            <P size="medium" tag="p">
              Похоже что-то пошло не так!
            </P>
            <Button size="small" color="whiteText" bgColor="blue">
              Перейти на главную
            </Button>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/404.jpg"
            width={500}
            height={500}
            alt="Страница не найдена"
          />
        </div>
      </div>
    </WrapperSection>
  );
}
