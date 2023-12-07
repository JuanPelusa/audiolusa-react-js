import React from 'react'
import Counter from '../Counter/Counter'
const currencyType = "usd";

const ItemDetail = ({ item }) => {
  return (
    <div id='productTitle'>
    <div className="product-card-detail">
        <img src={item.image} alt={item.name} />
        <div>
          <h5 className="title-card">{item.name}</h5>
            <p className="description">{item.description}</p>
            <p>Specs: {item.specs}</p>
          <p className="infoPrice">{currencyType} {item.price}.-</p>
        </div>
        <p className="cartProductQuantity">Qty: 
          {item.quantity}
        </p>
        <p>Stock: {item.stock}</p>
        <div>
          <Counter />
        </div>
        <button class="add" id={item.id}>BUY NOW</button>
    </div>
    </div>
  )
}

export default ItemDetail