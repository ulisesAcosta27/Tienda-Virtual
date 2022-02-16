import React from 'react'
import CardProducts from './CardProducts'
import './ProductsContainer.css'
import ArrayItemsValue from '../ArrayItemsValue'

const ProductsContainer = () => {
  return (
    <div className='products'>
        <h2>Ultimos Productos</h2>
        <div className='products-container'>
        <CardProducts itemsCards={ ArrayItemsValue }/>
        </div>
    </div>
  )
}

export default ProductsContainer