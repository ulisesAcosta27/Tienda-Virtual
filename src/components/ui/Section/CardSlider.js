import React from 'react'
import './CardSlider.css'
import { Link } from 'react-router-dom'

const CardSlider = ({ itemCard }) => {
  return (
      <>
      {
        itemCard.map(item => (
        <Link to='/cart' className='card-container' key={ item.name }>
            <div className='card-text'>
                <h4>{ item.name }</h4>
            </div>
            <div className='card-image'>
                <img src={ item.image } alt={ item.name } />
            </div>
        </Link>
        ))
    }
      </>
  )
}

export default CardSlider