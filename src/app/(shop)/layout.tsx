import { BreadCrumbs } from "@/components";
import React from "react";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadCrumbs />
      <div>{children}</div>
    </>
  );
}
