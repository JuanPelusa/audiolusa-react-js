import React from 'react';
import { useCartContext } from '../Context/CartContext';
const currencyType = "usd";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    
    return (
        <div className="container basket">
          <div className="cartContainer">
            <div id="productsInCart" className="cartProducts">
            <div className='cartProduct'>
              <img className='cartProduct' src={product.image} alt={product.title} />
              
              <div>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <h5>Price: {currencyType} {product.price}.-</h5>
                  
                  <p>QTY: {product.quantity}</p>
                  
                  <h6>*Subtotal: {currencyType} {product.quantity * product.price}.-</h6>
                  </div>

                  <button onClick={() => removeProduct(product.id)} className="eraseProduct"><p><i aria-hidden="true" 
                    className="fa fa-trash"></i></p>
                  </button>
            </div>
            </div>
          
        </div>
        
      </div>

    );
};

export default ItemCart;