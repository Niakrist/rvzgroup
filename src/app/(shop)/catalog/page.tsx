import { CatalogNavBar } from "@/components";
import Products from "@/components/Products/Products";
import { SideBar } from "@/components/SideBar/SideBar";
import { Metadata } from "next";
import React from "react";
import styles from "./CatalogPage.module.css";

export const metadata: Metadata = {
  title: "Каталог подшипников РВЗ",
  description: "Каталог подшипников РВЗ",
};

export default function CatalogPage() {
  return (
    <>
      <CatalogNavBar />
      <div className={styles.section}>
        <div className={styles.container}>
          <SideBar />
          <Products />
        </div>
      </div>
    </>
  );
}
