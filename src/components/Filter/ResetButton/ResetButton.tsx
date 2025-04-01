import { resetFilter } from "@/store/filterSlice/filterSlice";
import { AppDispatch } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

import styles from "./ResetButton.module.css";

const ResetButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();

  const handleResetFilter = (): void => {
    dispatch(resetFilter());
    router.replace(pathname);
  };
  return (
    <button onClick={handleResetFilter} className={styles.button}>
      Сбросить фильтр
    </button>
  );
};

export default ResetButton;
