"use client";
import { toggleMenuModal } from "@/store/openModalSlice/openModalSlice";
import { Button } from "@/ui";

import React from "react";
import { useDispatch } from "react-redux";
import styles from "./CatalogButton.module.css";

type ICatalogButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const CatalogButton = ({
  ...props
}: ICatalogButtonProps): React.JSX.Element => {
  const dispatch = useDispatch();

  const handleToggleCatalog = () => {
    dispatch(toggleMenuModal(true));
  };

  return (
    <Button
      {...props}
      onClick={handleToggleCatalog}
      color="whiteText"
      bgColor="blue"
      size="medium">
      <span className={styles.openClose} />
      Каталог
    </Button>
  );
};
