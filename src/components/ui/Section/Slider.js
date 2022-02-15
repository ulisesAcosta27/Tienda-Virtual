import React from 'react'
import CardSlider from './CardSlider'

import img1 from '../../../assets/images/airpods.jpg'
import img2 from '../../../assets/images/playstation.jpg'
import img3 from '../../../assets/images/phone.jpg'

const Slider = () => {
    const ItemSlider = [
        { name: 'Apple Air Pords Pro', image: img1 },
        { name: 'Sony PlayStatio Pro', image: img2 },
        { name: 'Iphone 11 PRO Mac', image: img3 }
    ]
  return (
    <div>
        <CardSlider itemCard={ ItemSlider }/>
    </div>
  )
}

export default Slider