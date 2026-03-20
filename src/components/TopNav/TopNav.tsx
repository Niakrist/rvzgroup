import { TopNavMenu } from "@/components";
import styles from "./TopNav.module.css";
import { PHONE_SPB, PHONE_SPB_2, PHONE_SPB_LINK, PHONE_SPB_LINK_2 } from "@/constants/contacts";

export const TopNav = () => {
  return (
    <section className={styles.topNav}>
      <div className={styles.container}>
        <TopNavMenu size="big" />
        <div className={styles.phoneGroup}>
          <a className={styles.link} href={`tel:${PHONE_SPB_LINK_2}`}>
            {PHONE_SPB}
          </a>
          <a className={styles.link} href={`tel:${PHONE_SPB_LINK}`}>
            {PHONE_SPB_2}
          </a>
        </div>
      </div>
    </section>
  );
};
