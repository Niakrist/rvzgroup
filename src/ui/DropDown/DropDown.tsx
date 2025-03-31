"use client";
import React, { useState } from "react";
import cn from "classnames";
import { Icon } from "@/components";
import { Checkbox } from "@/ui";
import { IDropDownProps } from "./DropDown.props";
import styles from "./DropDown.module.css";
import { useFilter } from "@/hooks/useFilters";

export const DropDown: React.FC<IDropDownProps> = ({ list, name, filter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { queryParams, updateQueryParams } = useFilter();

  const handleToggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCheck = (itemId: string) => {
    const currentValue = queryParams[filter] as string | undefined;
    const currentValues = currentValue ? currentValue.split("|") : [];
    if (currentValues.includes(itemId)) {
      const newValues = currentValues.filter((value) => value !== itemId);
      updateQueryParams(
        filter,
        newValues.length > 0 ? newValues.join("|") : ""
      );
    } else {
      const newValues = [...currentValues, itemId];
      updateQueryParams(filter, newValues.join("|"));
    }
  };

  return (
    <div className={styles.wrapperDwopDown}>
      <button
        onClick={handleToggleModal}
        className={cn(styles.button, { [styles.open]: isOpen })}>
        {name}

        <Icon
          name="iconArrow"
          className={cn(styles.iconArrow, isOpen && styles.iconArrowOpen)}
        />
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.id}>
              <Checkbox
                id={item.name}
                isCheck={queryParams[filter]?.includes(item.id)}
                handleCheck={() => handleCheck(item.id)}>
                {item.name}
              </Checkbox>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
