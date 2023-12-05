import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {
  return (
    <div className='row'>
        {item.map(item=>
          <div className='col-md-3 productTitle' key={item.id}>
            <div>
              <Item item={item}/>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ItemList