import React, { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: () => void
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
