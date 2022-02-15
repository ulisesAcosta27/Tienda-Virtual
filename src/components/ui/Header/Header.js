import React from 'react'
import ItemValues from './ItemValues'
import './Header.css'
  
const Header = () => {
  const itemValue = [
    { link: '/login', name: 'Login' },
    { link: '/cart', name: 'Carrito' }
  ]

  return (
    <nav className='navbar-container'>
      <div className='search-container'>
        <div className='logo-container'>
          <p>Tienda Virtual</p>
        </div>
        <div className='input-container'>
          <input type='text' />
          <button>Buscar</button>
        </div>
      </div>
      <ul>
        <ItemValues items={itemValue} />
      </ul>
    </nav>
  )
}

export default Header