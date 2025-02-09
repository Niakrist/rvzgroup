"use client";
import React, { useEffect } from "react";
import { Modal } from "../Modal";
import { Filter } from "@/components/Filter/Filter";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import { useDispatch } from "react-redux";

import styles from "./FilterModal.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Icon } from "@/components/Icon/Icon";

export const FilterModal = () => {
  const dispatch = useDispatch();
  const { isFilterModal } = useSelector((state: RootState) => state.openModal);

  const handleCloseModal = () => {
    console.log("+++");
    dispatch(toggleOpenMobileFilter(false));
  };

  useEffect(() => {
    console.log("isFilterModal: ", isFilterModal);
  }, [handleCloseModal]);

  if (!isFilterModal) {
    return null;
  }

  return (
    <Modal width="big">
      <button onClick={handleCloseModal} className={styles.close} />
      <div className={styles.title}>
        <Icon name="iconFilter" className={styles.iconFilter} />
        Фильтр
      </div>
      <Filter />
    </Modal>
  );
};
