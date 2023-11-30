import { ReactNode } from "react";

//Types used in context
export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;

  cartQuantity: number;
  cartItems: CartItem[];
};

// Types used in components

export type CartItemProps = {
  id: number;
  quantity: number;
};

export type ShoppingCartProps = {
  isOpen: boolean;
};

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
