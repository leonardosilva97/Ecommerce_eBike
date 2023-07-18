import React, { ReactNode, createContext, useContext, useState } from "react";
import { CardItemProps } from "../atomic/atoms/CartItem";

type CartItem = {
  subTotal: string;
} & CardItemProps;

type CartProviderProps = {
  children: ReactNode;
};

type CartContextData = {
  items: CartItem[];
  tabBarIsVisible: boolean;
  handleTabBarIsVisble: (isVisible: boolean) => void;
};

const mock = [
  {
    title: "Road Bike",
    amount: "1",
    image: "https://i.imgur.com/zjgFbOM.png",
    price: "120",
  },
  {
    title: "SMITH - Trade",
    amount: "2",
    image: "https://i.imgur.com/MUdLCNj.png",
    price: "220",
  },
  {
    title: "PILOT - Chromoly",
    amount: "1",
    image: "https://i.imgur.com/LkuTy3r.png",
    price: "456",
  },
];

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const CartProvider = ({ children }: CartProviderProps) => {
  const [tabBarIsVisible, setTabBarIsVisible] = useState(true);

  function handleTabBarIsVisble(isVisible: boolean) {
    setTabBarIsVisible(isVisible);
  }
  return (
    <CartContext.Provider
      value={{ items: mock, tabBarIsVisible, handleTabBarIsVisble }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
