import CatalogNavBar from "@/components/CatalogNavBar/CatalogNavBar";
import { SideBar } from "@/components/SideBar/SideBar";
import React from "react";

import styles from "./CatalogPage.module.css";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <>
        <CatalogNavBar />
        <div className={styles.section}>
          <div className={styles.container}>
            <SideBar />
            {children}
          </div>
        </div>
      </>
    </>
  );
}
