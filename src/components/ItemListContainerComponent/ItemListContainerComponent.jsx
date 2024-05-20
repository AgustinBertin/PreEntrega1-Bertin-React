import React from 'react'

import "./ItemListConainerComponent.css"

const ItemListContainerComponent = ({greeting}) => {

  return (
    <div className='itemListContainer'>{greeting}</div>
  )
}

export default ItemListContainerComponent