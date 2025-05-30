import React from "react";
import Link from "next/link";
import styles from "./TagList.module.css";
import { Htag } from "@/ui";

interface ICategory {
  id: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  url: string;
}

interface ICategoryProps {
  urlsCategory: ICategory[];
}

const TagList = ({ urlsCategory }: ICategoryProps) => {
  if (!urlsCategory.length) return <div>Загрузка тегов</div>;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Htag tag="h2" size="medium">
            Этот товар из подборок
          </Htag>
          <ul className={styles.list}>
            {urlsCategory.map((item) => (
              <li key={item.url}>
                <Link className={styles.item} href={`/catalog/${item.url}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TagList;
