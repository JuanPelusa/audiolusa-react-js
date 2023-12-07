import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {
  return (
    <>
        {item.map(item=>
          <div key={item.id}>
            <div>
              <Item item={item}/>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ItemList