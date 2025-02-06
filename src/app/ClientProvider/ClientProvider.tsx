"use client";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

interface IClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider: React.FC<IClientProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
