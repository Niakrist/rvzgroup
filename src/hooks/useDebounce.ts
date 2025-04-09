import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearInterval(timerId);
    };
  }, [value]);

  return debounceValue;
};
