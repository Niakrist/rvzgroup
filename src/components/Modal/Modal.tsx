"use client";
import React, { useRef } from "react";
import styles from "./Modal.module.css";
import { IModalProps } from "./Modal.props";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import cn from "classnames";

export const Modal: React.FC<IModalProps> = ({ children, width, ...props }) => {
  const refModal = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { getPriceModal, isThanksModal } = useSelector(
    (state: RootState) => state.openModal
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isThanksModal) return;
    if (
      refModal.current &&
      e.target instanceof HTMLDivElement &&
      e.target === refModal.current
    ) {
      dispatch(isGetPriceModal(!getPriceModal));
    }
  };

  return (
    <div
      onClick={handleClick}
      ref={refModal}
      {...props}
      className={styles.wrapper}>
      <div className={cn(styles.modal, styles[width])}>{children}</div>
    </div>
  );
};
