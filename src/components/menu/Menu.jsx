import './menu.css'
import { Link } from 'react-router-dom'
import headphonesLogo from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersLogo from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesLogo from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '/assets/shared/desktop/icon-arrow-right.svg'


function Menu() {
  return (
    <div className='menu max-container'>
      <div className='menu-item'>
        <img src={headphonesLogo} alt="" className='menu-headphones-logo' />
        <div className='menu-headphones-text-container'>
          <p className='menu-headphones-text'>
            <Link to='/headphones' className='menu-headphones-text-link'>
              <p className='menu-headphones-text-link-text'>
                Shop
              </p>
              <img src={arrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
      <div className='menu-item'>
        <img src={speakersLogo} alt="" className='menu-headphones-logo' />
        <div className='menu-headphones-text-container'>
          <p className='menu-headphones-text'>
            <Link to='/speakers' className='menu-headphones-text-link'>
              <p className='menu-headphones-text-link-text'>
                Shop
              </p>
              <img src={arrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
      <div className='menu-item'>
        <img src={earphonesLogo} alt="" className='menu-headphones-logo' />
        <div className='menu-headphones-text-container'>
          <p className='menu-headphones-text'>
            <Link to='/earphones' className='menu-headphones-text-link'>
              <p className='menu-headphones-text-link-text'>
                Shop
              </p>
              <img src={arrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu