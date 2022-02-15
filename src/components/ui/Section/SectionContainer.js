import React from 'react'
import ProductsContainer from './ProductsContainer'
import Slider from './Slider'
import './SectionContainer.css'

const SectionContainer = () => {
  return (
    <>
        <div className='section-container'>
            <Slider />
            <ProductsContainer />
        </div>
    </>
  )
}

export default SectionContainer