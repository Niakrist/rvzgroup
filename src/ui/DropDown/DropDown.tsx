"use client";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Icon } from "@/components";
import { Checkbox } from "@/ui";
import { IList } from "@/types/types";
import { IDropDownProps } from "./DropDown.props";
import styles from "./DropDown.module.css";

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
    <div className={styles.wrapperDwopDown}>
      <button
        onClick={handleToggleModal}
        className={cn(styles.button, { [styles.open]: isOpen })}>
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
              <Checkbox
                id={item.id}
                isCheck={item.isCheck}
                handleCheck={handleCheck}>
                {item.name}
              </Checkbox>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
