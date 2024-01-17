import React, {useState} from 'react'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
const currencyType = "usd";

const ItemDetail = ({ item }) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const navigate = useNavigate();
  
  const add = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  const goBack = () => {
    navigate(-1); // This navigates back one step in the history
  };

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
          {goToCart ? <Link to='/cart' className='addTo'>Go To Cart➡️</Link> :<Counter stock={item.stock} initial={1} add={add} />}
          {goToCart && <Link to='/' className='addMore'>⬅️Continue Shopping</Link>}
        </div>
        <div className='backButtonsContain'>  
          <Link type="button" onClick={goBack} className='backButtons bk-first'>Go Back</Link>
          <Link to={'/'} className='backButtons bk-third'>Go home</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail