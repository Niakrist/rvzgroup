import { BreadCrumbs, CatalogNavBar } from "@/components";
import React from "react";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadCrumbs />
      <CatalogNavBar />
      <div>{children}</div>
    </>
  );
}
