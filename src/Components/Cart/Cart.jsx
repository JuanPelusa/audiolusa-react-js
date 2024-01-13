import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { useCartContext } from '../Context/CartContext';
const currencyType = "usd";

const Cart = () => {
  const { cart, totalPrice, Tax } = useCartContext();
 
  if (cart.length === 0){
    return (
      <div className='emptyCart'>
        <h5>There's No Products In Cart👀</h5>
        <Link to='/' className='goShop'>⬅️Go Shopping</Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="container basket">
        <div className="right-basket">
          <h3>- Checkout -</h3>
          <h6>Subtotal: </h6>
          <h6>{currencyType} {totalPrice()}</h6>
          <br />
          <p>*Tax: </p>
          <p>{currencyType} {Tax()}</p>
          <br />
          <h5>Total: </h5>
          <h5>{currencyType} {totalPrice() + Tax()}</h5>
      
          <Link to="/checkout">
            <button id="buyBasket" className="buyButton">Finalizar Compra</button>
          </Link>
    
          <Link to='/' className='addMore'>⬅️Continue Shopping</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;