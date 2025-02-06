import { useCallback, useEffect } from "react";

export const useKeyPress = (key: string, callback: () => void) => {
  const handleClick = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === key) {
        callback();
      }
    },
    [key, callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleClick),
      () => {
        return window.removeEventListener("keydown", handleClick);
      };
  }, [handleClick]);
};
