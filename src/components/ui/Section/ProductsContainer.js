import React from 'react'
import CardProducts from './CardProducts'
import './ProductsContainer.css'

import itemImg1 from '../../../assets/images/airpods.jpg'
import itemImg2 from '../../../assets/images/playstation.jpg'
import itemImg3 from '../../../assets/images/phone.jpg'
import itemImg4 from '../../../assets/images/alexa.jpg'
import itemImg5 from '../../../assets/images/camera.jpg'
import itemImg6 from '../../../assets/images/mouse.jpg'

const itemsCard = [
    {image: itemImg1 , name: 'Apple AirPods Pro', stars: '5 stars', price: '$84.99'},
    {image: itemImg2 , name: 'Sony PlayStation 4 pro', stars: '5 stars', price: '$400.99'},
    {image: itemImg3 , name: 'Apple Iphone 11 Pro', stars: '5 stars', price: '$1200.00'},
    {image: itemImg4 , name: 'Amazon Echo Dot 3rd Generation', stars: '5 stars', price: '250.00'},
    {image: itemImg5 , name: 'Cannon EOS 80D DSLR Camera', stars: '5 stars', price: '$699.99'},
    {image: itemImg6 , name: 'Logitech G-Series Gaming Mouse', stars: '5 stars', price: '$14.99'}
]

const ProductsContainer = () => {
  return (
    <div className='products'>
        <h2>Ultimos Productos</h2>
        <div className='products-container'>
        <CardProducts itemsCards={ itemsCard }/>
        </div>
    </div>
  )
}

export default ProductsContainer