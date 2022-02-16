import React from 'react'
import './CardProducts.css'
import { Link } from 'react-router-dom'

const CardProducts = ({ itemsCards }) => {
  return (
    <>
        {
            itemsCards.map( item => (
                <div className='card-products-container' key={ item.name } >
                    <Link to={`/cart/${ item.id }`} className='card-products-img'>
                        <img src={ item.image } alt={ item.name }/>
                    </Link>
                    <Link to={`/cart/${ item.id }`} className='card-products-name'>
                        <p>{ item.name }</p>
                    </Link>
                    <div className='card-products-stars'>
                        <p>{ item.stars }</p>
                    </div>
                    <div className='card-products-price'>
                        <p>{ item.price }</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default CardProducts