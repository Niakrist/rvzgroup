import React from "react";
import { servicesPages } from "@/types/servicesPages";
import styles from "./TopNavMenu.module.css";
import Link from "next/link";
import { ITopNavMenuProps } from "./TopNavMenu.props";
import cn from "classnames";

export const TopNavMenu: React.FC<ITopNavMenuProps> = ({ size, vertical }) => {
  return (
    <nav>
      <ul className={cn(styles.list, { [styles.listVertical]: vertical })}>
        {servicesPages.map((page) => (
          <li key={page.path}>
            <Link className={cn(styles.link, styles[size])} href={page.path}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
