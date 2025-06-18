"use client";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import {
  isGetPriceModal,
  toggleMenuModal,
} from "@/store/openModalSlice/openModalSlice";
import { IModalProps } from "./Modal.props";
import styles from "./Modal.module.css";
import { clearCommercialApplication } from "@/store/forCommercialApplicationSlice/forCommercialApplicationSlice";

export const Modal: React.FC<IModalProps> = ({ children, width, ...props }) => {
  const refModal = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      refModal.current &&
      e.target instanceof HTMLDivElement &&
      e.target === refModal.current
    ) {
      dispatch(isGetPriceModal(false));
      dispatch(toggleMenuModal(false));
      dispatch(clearCommercialApplication());
    }
  };

  return (
    <div
      {...props}
      ref={refModal}
      onClick={handleClick}
      className={styles.wrapper}
    >
      <div className={cn(styles.modal, styles[width])}>{children}</div>
    </div>
  );
};
