import react, { useContext, useState } from "react";

const CartContext = react.createContext();
export const useCartContext = () => useContext(CartContext);

const productItems = [
  { id: 1, name: "Tshirt1", color: "orange", price: 399 },
  { id: 2, name: "Tshirt2", color: "skyblue", price: 349 },
  { id: 3, name: "Tshirt3", color: "coral", price: 299 },
  { id: 4, name: "Tshirt4", color: "black", price: 499 },
  { id: 5, name: "Tshirt5", color: "violet", price: 279 },
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prodDetails) => {
    setCartItems((prod) => [...prod, prodDetails]);
  };

  return (
    <CartContext.Provider value={{ productItems, addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
