import React from "react";
import cn from "classnames";
import styles from "./WrapperSection.module.css";
import { IWrapperSectionProps } from "./WrapperSection.props";

export const WrapperSection = ({
  bgSection,
  children,
  className,
  ...props
}: IWrapperSectionProps) => {
  return (
    <section
      {...props}
      className={cn(styles.section, className, {
        [styles.white]: bgSection === "white",
        [styles.grey]: bgSection === "grey",
      })}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
