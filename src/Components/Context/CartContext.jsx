import React, { useState, useContext } from 'react';

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
          })
        );
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
  };
      
  const clearCart = () => setCart([]);

  const Tax = () => {
    return cart.reduce((acc, product) => 
      acc + product.quantity * product.price * 5 / 100, 0)
  }

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
    
  const totalProducts = () =>
    cart.reduce(
      (acc, actualProduct) => acc + actualProduct.quantity,
      0
    );
    
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const addToCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
      Toastify({
        text: "Product added",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
          style: {
            color: "#000000",
            background: "linear-gradient(to right, #ff8c00, #fbc056)",
            borderRadius: "10px",
            textTransform: "uppercase",
            fontSize: ".75rem"
          },
        onClick: function(){}  
      })
    .showToast();
  }

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id)); 
      Toastify({
        text: "Product removed",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "center",
        stopOnFocus: true,
          style: {
            color: "#000000",
            background: "linear-gradient(to right, #ff0000, #ff3636)",
            borderRadius: "10px",
            textTransform: "uppercase",
            fontSize: ".75rem"
          },
        onClick: function(){}
      })
    .showToast();
  }

  return (
    <CartContext.Provider
      value={{
        isInCart,
        addToCart,
        removeProduct,
        addProduct,
        Tax,
        totalPrice,
        totalProducts,
        cart,
        clearCart
      }}
    >
    {children}
    </CartContext.Provider>
  );
};

export default CartProvider