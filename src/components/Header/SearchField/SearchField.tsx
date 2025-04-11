"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../../Icon/Icon";
import { useDebounce } from "@/hooks/useDebounce";
import styles from "./SearchField.module.css";
import { searchProducts } from "@/api/searchProducts";
import { Button } from "@/ui";
import Link from "next/link";
import { IBearing } from "@/types/bearing";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";

export const SearchField = () => {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<IBearing[]>([]);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const refSearchContainer = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setSearchList([]);
    setIsOpenSearch(false);
  };

  const handleClose = () => {
    if (isOpenSearch) {
      setIsOpenSearch(false);
    }
  };

  const handleSearchAll = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (search.trim()) {
      router.replace(`/catalog?searchTerm=${encodeURIComponent(search)}`);
      setIsOpenSearch(false);
    }
  };

  useClickOutside(refSearchContainer, handleClose);

  const searchDebounce = useDebounce(search, 500);

  useEffect(() => {
    if (searchDebounce) {
      setIsOpenSearch(true);
      const getFilterProducts = async () => {
        const data = await searchProducts(searchDebounce);
        setSearchList(data.rows);
      };
      getFilterProducts();
    } else {
      setIsOpenSearch(false);
    }
  }, [searchDebounce]);

  return (
    <div ref={refSearchContainer} className={styles.searchContainer}>
      <form className={styles.form} onSubmit={handleSearchAll}>
        <input
          className={styles.search}
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Поиск по товарам"
          aria-label="Поиск по каталогу подшипников"
        />
        {search && (
          <button
            onClick={handleClear}
            type="button"
            aria-label={"Очистить строку поиска"}>
            <Icon name="iconCross" className={styles.iconSearch} />
          </button>
        )}
        <button
          onClick={handleSearchAll}
          type="button"
          aria-label={"Выполнить поиск"}>
          <Icon name="iconSearch" className={styles.iconSearch} />
        </button>
      </form>
      {isOpenSearch && (
        <div className={styles.searchListWrapper}>
          {searchList.length ? (
            <>
              <ul className={styles.searchList}>
                {searchList.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={handleClear}
                      href={`/product/${item.url}`}
                      className={styles.searchItemLink}>
                      <img
                        className={styles.searchItemImg}
                        src={`http://localhost:4000/${item.images}`}
                        alt={item.title}
                      />
                      <p className={styles.title}>{item.title}</p>
                      {item.price ? (
                        <p className={styles.searchItemPrice}>
                          {item.price} руб./шт
                        </p>
                      ) : (
                        <p className={styles.searchItemPrice}>Под заказ</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                className={styles.button}
                type="button"
                bgColor="blue"
                color="whiteText"
                size="small"
                onClick={handleSearchAll}>
                Все результаты
              </Button>
            </>
          ) : (
            <p className={styles.notFound}>
              По вашему запросу ничего не найдено
            </p>
          )}
        </div>
      )}
    </div>
  );
};
