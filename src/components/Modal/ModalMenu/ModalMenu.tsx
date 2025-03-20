"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Modal } from "@/components";
import { useKeyPress } from "@/hooks/useKeayPress";
import { toggleMenuModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import styles from "./ModalMenu.module.css";
import { usePathname } from "next/navigation";

export const ModalMenu = () => {
  const { isMenuModal } = useSelector((state: RootState) => state.openModal);
  const pathname = usePathname();

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleMenuModal(false));
  };

  const handleCloseMenu = () => {
    dispatch(toggleMenuModal(false));
  };

  useKeyPress("Escape", handleCloseMenu);

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  if (!isMenuModal) {
    return null;
  }

  return (
    <Modal width="mobileMenu">
      <button onClick={handleCloseModal} className={styles.close} />
      <Menu />
    </Modal>
  );
};
