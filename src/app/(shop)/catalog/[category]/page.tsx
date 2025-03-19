import { getCategories } from "@/api/getCategories";
import { CatalogNavBar } from "@/components";
import Products from "@/components/Products/Products";
import { SideBar } from "@/components/SideBar/SideBar";
import { notFound } from "next/navigation";
import React from "react";

import styles from "./CatalogPage.module.css";

interface ICategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const { category } = await params;
  if (!category) {
    notFound();
  }

  const urlPaths = {
    bodyId: {
      sharikovye: "1",
      rolikovye: "2",
      igolchatye: "3",
      sharnirnyye: "4",
    },

    loadId: {
      radialnye: "1",
      "radialno-upornye": "2",
      upornye: "3",
    },

    rowId: {
      odnoryadnye: "1",
      dvuhryadnye: "2",
      chetyrekhryadnye: "3",
    },

    formaId: {
      samoustanavlivayuschiesya: "1",
      sfericheskie: "2",
      konicheskie: "3",
    },

    standartId: {
      gost: "1",
      iso: "2",
    },
  };

  const categories = category.split(/(?<!radialno)-/);
  const paramsToSend = {};

  for (const part of categories) {
    if (urlPaths.bodyId[part]) {
      paramsToSend.bodyId = urlPaths.bodyId[part];
    } else if (urlPaths.loadId[part]) {
      paramsToSend.loadId = urlPaths.loadId[part];
    } else if (urlPaths.rowId[part]) {
      paramsToSend.rowId = urlPaths.rowId[part];
    } else if (urlPaths.formaId[part]) {
      paramsToSend.formaId = urlPaths.formaId[part];
    } else if (urlPaths.standartId[part]) {
      paramsToSend.standartId = urlPaths.standartId[part];
    }
  }

  const products = await getCategories(paramsToSend);

  if (!products) return;

  return (
    <>
      <CatalogNavBar />
      <div className={styles.section}>
        <div className={styles.container}>
          <SideBar />
          <Products bearingList={products.rows} />
        </div>
      </div>
    </>
  );
}
