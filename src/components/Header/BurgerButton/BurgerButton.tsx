"use client";
import { toggleMenuBurger } from "@/store/openModalSlice/openModalSlice";
import { useDispatch } from "react-redux";
import cn from "classnames";
import styles from "./BurgerButton.module.css";
import React from "react";

type IBurgerButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const BurgerButton = ({
  ...props
}: IBurgerButtonProps): React.JSX.Element => {
  const dispatch = useDispatch();

  const handletoggleBurger = () => {
    dispatch(toggleMenuBurger(true));
  };
  return (
    <button {...props} onClick={handletoggleBurger}>
      <span className={cn(styles.burgerLine)} />
    </button>
  );
};
