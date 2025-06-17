import CatalogNavBar from "@/components/CatalogNavBar/CatalogNavBar";
import { SideBar } from "@/components/SideBar/SideBar";
import React from "react";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
