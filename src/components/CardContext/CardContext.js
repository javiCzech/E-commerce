import React, { useContext, useState, createContext, useEffect } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const store = () => {
    return JSON.parse(localStorage.getItem("cart") ?? "[]");
  };
  const [cart, setCart] = useState(store);

  const [newCompra, setNewCompra] = useState();

  const isInCart = (id) => cart.some((e) => e.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((e) => [...e, { ...item, quantity }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  const removeItem = (itemId) => {
    console.log("removeiteminside:", itemId);
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clear = () => setCart([]);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  });
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        totalPrice,
        newCompra,
        setNewCompra,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
