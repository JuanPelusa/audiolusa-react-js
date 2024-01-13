import React, {useState} from 'react'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
const currencyType = "usd";

const ItemDetail = ({ item }) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const add = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div id='productTitle'>
      <div className="product-card-detail">
        <div>
          <img src={item.image} alt={item.name} />
        </div>
          <div className='info-detail'>
            <h5 className="title-card">{item.name}</h5>
              <p className="description">{item.description}</p>
                <h6>Specs</h6>
                  <p>{item.specs}</p>
                    <p className="infoPrice">{currencyType} {item.price}.-</p>
                  <p className="cartProductQuantity">Qty: 
                {item.quantity}
              </p>
            <p>Stock: {item.stock}</p>
            {goToCart ? <Link to='/cart' className='addTo'>Go To Cart➡️</Link> :<Counter stock={item.stock} initial={0} add={add} />}
            {goToCart && <Link to='/' className='addMore'>⬅️Continue Shopping</Link>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail