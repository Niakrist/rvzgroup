"use client";
import React, { useEffect } from "react";

export const MapYandex = () => {
  useEffect(() => {
    const container = document.getElementById("yandex-map-container");
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A78db30b2d5e5d4b8891718a5a4492e63811fa36e9a0e80b76a85278cf0ee2150&width=100%&height=270&lang=ru_RU&scroll=true`;

    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="yandex-map-container" style={{ width: "100%", height: "270px" }} />
  );
};
