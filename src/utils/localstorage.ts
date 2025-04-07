import { ICartItem } from "@/types/cartItem.interface";

export const saveCartInLocalStorage = (cart: ICartItem) => {
  const storageCart = <ICartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  if (storageCart.length) {
    // Проверяем, есть ли уже такой товар в корзине
    const existingItemIndex = storageCart.findIndex(
      (item) => item.product.id === cart.product.id
    );

    if (existingItemIndex !== -1) {
      // Если товар уже есть — обновляем его количество
      storageCart[existingItemIndex].count += cart.count;
    } else {
      // Если товара нет — добавляем в корзину
      storageCart.push(cart);
    }

    // Сохраняем обновлённую корзину в localStorage
    localStorage.setItem("cart", JSON.stringify(storageCart));

    console.log("storageCart: ", storageCart);
  } else {
    storageCart.push(cart);
    localStorage.setItem("cart", JSON.stringify(storageCart));
  }
};

export const loadCartFromLocalStorage = (): ICartItem[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as ICartItem[];
        return parsedCart;
      } catch (error) {
        console.error("Ошибка при парсинге cart из localStorage:", error);
        return [];
      }
    }
  }
  return [];
};
