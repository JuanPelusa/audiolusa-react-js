import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { useCartContext } from '../Context/CartContext';
import { Button, Container } from 'react-bootstrap';
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
    <Container className='shopCart'>
      <h2>- Cart -</h2>
    </Container>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}      
      <Container className="basket">
        <div className="right-basket">
          <h2>- Checkout -</h2>
            <div>
              <h6>Subtotal: </h6>
                <h6>{currencyType} {totalPrice()}.-</h6>
                  <p>Tax: </p>
                  <p>{currencyType} {Tax()}.-</p>
                <h5>Total: </h5>
              <h5>{currencyType} {totalPrice() + Tax()}.-</h5>
            </div>
          <Link to="/checkout">
            <Button id="buyBasket" className="buyButton">Procced to checkout</Button>
          </Link>
          <Link to='/' className='addMore'>⬅️Continue Shopping</Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;