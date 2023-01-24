import React from 'react';
import css from '../Navbar/Navbar.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiDrink } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      {/* logo */}
      <div className='title'>
        <Link className='title-1' to="/">
          <h1><BiDrink/> DrinksStation</h1>
        </Link>
        
      </div>
      
      <div className='right'>
        <ul className='menu-list'>
            <Link className='link' to='/Productos'>
              <li>Productos
                <li  className='menu-productos'>
                  <ul className='menu-nestig' >
                    <Link to="/Productos/Mojito" >
                      <li className='menu_dentro'>Mojitos</li>
                    </Link>
                    <Link to="/Productos/Negroni">
                      <li className='menu_dentro'>Negroni</li>
                    </Link>
                    <Link to="/Productos/Gin Tonic">
                      <li className='menu_dentro'>Gin Tonic</li>
                    </Link>
                  </ul>
                </li>
                
              </li>
            </Link>
            <Link className='link' to='/Nosotros'>
              <li>Nosotros</li>
            </Link>
            <Link className='link' to='/Contactos'>
              <li>Contactos</li>
            </Link>
        </ul>
        <input type="text" placeholder='buscar' className='find' />
        <button className='btn-shared' >buscar</button>
        <div className='carrito'>
          <BsFillCartPlusFill/>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
