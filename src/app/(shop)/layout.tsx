import { BreadCrumbs } from "@/components";
import React from "react";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadCrumbs />
      <div>{children}</div>
    </>
  );
}
