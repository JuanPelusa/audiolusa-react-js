import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="row cols-4">
        <img className="cartProduct" src={item.image} />
        <div>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h5>{currencyType} {item.price}.-</h5>
        </div>
        <button className="btn btn-outline-secondary mt-auto mb-auto" id="botonRestar">-</button>
        <p className="cartProductQuantity">Qty: 
        {item.quantity}
        </p>
        <button className="btn btn-outline-secondary mt-auto mb-auto" id="botonAgregar">+{item.id}</button>
        <button className="eraseProduct"><p><i aria-hidden="true" 
        className="fa fa-trash"></i></p>{item.id}</button>
    </div>
    
  )
}

export default ItemDetail