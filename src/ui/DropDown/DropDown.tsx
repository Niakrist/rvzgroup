"use client";
import React, { useEffect, useState } from "react";
import styles from "./DropDown.module.css";
import { Icon } from "@/components";
import cn from "classnames";
import { IDropDownProps } from "./DropDown.props";
import { IList } from "@/types/types";

export const DropDown: React.FC<IDropDownProps> = ({ list, setList, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quantityIsCheck, setQuantityIsCheck] = useState<number>(0);

  const handleToggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const getCountIsCheck = (list: IList[]) => {
    setQuantityIsCheck(list.filter((item) => item.isCheck).length);
  };

  useEffect(() => {
    getCountIsCheck(list);
  }, [list]);

  const handleCheck = (id: string) => {
    setList((prevList: IList[]) => {
      return prevList.map((item: IList) => {
        if (item.id === id) {
          return { ...item, isCheck: !item.isCheck };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div>
      <button
        onClick={handleToggleModal}
        className={cn(styles.button, { [styles.open]: isOpen })}
      >
        {name}
        <div className={styles.wrapper}>
          {!!quantityIsCheck && (
            <span className={styles.span}>{quantityIsCheck}</span>
          )}
          <Icon
            name="iconArrow"
            className={cn(styles.iconArrow, isOpen && styles.iconArrowOpen)}
          />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.id}>
              <input
                id={item.id}
                onChange={() => handleCheck(item.id)}
                checked={item.isCheck}
                className={styles.checkbox}
                type="checkbox"
              />
              <label
                className={cn(styles.label, { [styles.check]: item.isCheck })}
                htmlFor={item.id}
              >
                <div
                  className={cn(styles.iconCheckbox, {
                    [styles.check]: item.isCheck,
                  })}
                >
                  <Icon name="iconCheckbox" className={styles.icon} />
                </div>
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
