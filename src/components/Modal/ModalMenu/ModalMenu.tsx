import Menu from "@/components/Menu/Menu";
import { useKeyPress } from "@/hooks/useKeayPress";
import { toggleMenuModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";

import styles from "./ModalMenu.module.css";

const ModalMenu = () => {
  const { isMenuModal } = useSelector((state: RootState) => state.openModal);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleMenuModal(false));
  };

  const handleCloseMenu = () => {
    dispatch(toggleMenuModal(false));
  };

  useKeyPress("Escape", handleCloseMenu);

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

export default ModalMenu;
