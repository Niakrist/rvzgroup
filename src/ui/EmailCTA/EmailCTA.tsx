import { EMAIL_SALES } from "@/constants/contacts";
import React from "react";
import styles from "./EmailCTA.module.css";

import cn from "classnames";

interface IEmailCTAProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const EmailCTA: React.FC<IEmailCTAProps> = ({ className, ...props }) => {
  return (
    <address {...props} className={cn(styles.email, className)}>
      Отправить заявку на почту{" "}
      <a className={styles.link} href={`mailto:${EMAIL_SALES}`} target="_blank">
        {EMAIL_SALES}
      </a>
    </address>
  );
};
