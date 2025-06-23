"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter, Modal, Icon } from "@/components";
import { RootState } from "@/store/store";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import styles from "./FilterModal.module.css";

export const FilterModal = () => {
  const dispatch = useDispatch();
  const { isFilterModal } = useSelector((state: RootState) => state.openModal);

  const handleCloseModal = () => {
    dispatch(toggleOpenMobileFilter(false));
  };

  if (!isFilterModal) {
    return null;
  }

  return (
    <Modal width="big" height="100vh">
      <button onClick={handleCloseModal} className={styles.close} />
      <div className={styles.title}>
        <Icon name="iconFilter" className={styles.iconFilter} />
        Фильтр
      </div>
      <Filter />
    </Modal>
  );
};
