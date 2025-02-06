import { useEffect } from "react";

export const useKeyPress = (key: string, callback: () => void) => {
  const handleClick = (e: KeyboardEvent): void => {
    if (e.key === key) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleClick),
      () => {
        return window.removeEventListener("keydown", handleClick);
      };
  }, [key, handleClick]);
};
