import React from "react";
import Link from "next/link";
import cn from "classnames";
import { servicesPages } from "@/types/servicesPages";
import { ITopNavMenuProps } from "./TopNavMenu.props";
import styles from "./TopNavMenu.module.css";

export const TopNavMenu: React.FC<ITopNavMenuProps> = ({ size, vertical }) => {
  return (
    <nav>
      <ul className={cn(styles.list, { [styles.listVertical]: vertical })}>
        {servicesPages.map((page) => (
          <li key={page.path}>
            <Link
              className={cn(styles.link, styles[size])}
              href={`/${page.path}`}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
