import { persistentMap } from "@nanostores/persistent";
import { atom } from "nanostores";

export const isCartOpen = atom(false);

export type CartItem = {
  name: string;
  size: string;
  imageSrc: string;
  quantity: number;
};

export const cartItems = persistentMap<Record<string, CartItem>>(
  "cart:",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

type ItemDisplayInfo = Pick<
  CartItem,
  "name" | "imageSrc" | "size" | "quantity"
>;
export function addCartItem({
  name,
  imageSrc,
  size,
  quantity,
}: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[name];
  if (existingEntry) {
    cartItems.setKey(name, {
      ...existingEntry,
      size: size,
      quantity: quantity,
    });
  } else {
    cartItems.setKey(name, { name, imageSrc, size, quantity });
  }
}

export function removeCartItem(name: string) {
  cartItems.setKey(name, undefined);
  window.localStorage.removeItem(`cart:${name}`);
}
