import { persistentMap, persistentAtom } from "@nanostores/persistent";
import { atom, map } from "nanostores";

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
      quantity:
        parseInt(existingEntry.quantity.toString()) +
        parseInt(quantity.toString()),
    });
  } else {
    cartItems.setKey(name, { name, imageSrc, size, quantity });
  }
}

export function removeCartItem(name: string) {
  const cart = cartItems.get();
  window.localStorage.removeItem(`cart:${name}`);
  delete cart[name];
  //window.location.reload();
}
