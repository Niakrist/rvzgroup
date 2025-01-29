import { servicesPages } from "@/types/servicesPages";
import Link from "next/link";
import React from "react";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <section className={styles.topNav}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.list}>
            {servicesPages.map((page) => (
              <li key={page.path}>
                <Link className={styles.link} href={page.path}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.link} href="tel:78126428527">
          +7 812 642-85-27
        </a>
      </div>
    </section>
  );
};

export default TopNav;
