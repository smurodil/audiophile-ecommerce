import './navbar.css'
import logo from '/assets/shared/desktop/logo.svg'
import cartImg from '/assets/shared/desktop/icon-cart.svg'
import Cart from '../cart/Cart'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { Menu } from '../../components'

function Navbar() {
  const [showCart, setShowCart] = useState(false)
  const cart = useSelector((state) => state.cart)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) =>!prev)
  }

  const toggleCart = () => {
    setShowCart((prev) => !prev)
  }

  return (
    <div className='navbar'>
      <div className='navbar-container max-container' style={{position: "relative"}}>
        <div className='bars-container'>
          <FaBars className='bars' onClick={toggleMenu}/>
          {showMenu && (
            <div className='show-menu'>
              <div className='backgorund-menu'/>
              <Menu/>
            </div>
          )}
        </div>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <nav className='nav'>
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link className='link-wrap' to='/'>
                <p className='link'>
                  Home
                </p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='link-wrap' to='/headphones'>
                <p className='link'>
                  Headphones
                </p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='link-wrap' to='/speakers'>
                <p className='link'>
                  Speakers
                </p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='link-wrap' to='/earphones'>
                <p className='link'>
                  Earphones
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        <div>

        <div className={`cart ${cart === false && 'hidden'}`} onClick={toggleCart}>
          <img className='cart-icon' src={cartImg} alt="" />
          <span className='badge'>{cart.totalQuantity}</span>
        </div>

        {showCart && (
          <>
            <Cart/>
         </>
        )}

        </div>
      </div>
    </div>
  )
}

export default Navbar