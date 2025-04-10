// eslint-disable
import { RootState } from "@/store/store";
import { Middleware } from "@reduxjs/toolkit";

export const cartLocalStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    const result = next(action);
    if (action.type.startsWith("cart/")) {
      const { cart } = store.getState().cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return result;
  };

// eslint-enable
