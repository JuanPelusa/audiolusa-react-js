import React from 'react'
import { Link } from 'react-router-dom'
const currencyType = "usd";

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} style={{textDecoration: 'none'}}> 
      <div className='product-card'>
        <img src={item.image} alt={item.name} />
          <h5 className="title-card hr-line">{item.name}</h5>
          
            <p className="description">{item.description}</p>
          <p className="infoPrice">{currencyType} {item.price}.-</p>
        <h6>* Click on image to see details *</h6>
      </div>
    </Link>
  )
}

export default Item