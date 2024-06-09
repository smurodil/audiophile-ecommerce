import './footer.css'
import logo from '/assets/shared/desktop/logo.svg'
import facebook from '/assets/shared/desktop/icon-facebook.svg'
import twitter from '/assets/shared/desktop/icon-twitter.svg'
import instagram from '/assets/shared/desktop/icon-instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <hr className='footer-hr' />
      <div className='footer-container max-container'>
        <div className='footer-links-wrapper'>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
          <nav className='footer-nav'>
            <ul className='nav-links'>
              <li className='nav-item'>
                <Link className='link-wrap' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='link-wrap' to='/headphones'>
                  headphones
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='link-wrap' to='/speakers'>
                  speakers
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='link-wrap' to='/earphones'>
                  earphones
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-social-wrapper'>
          <p className='social-text'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <ul className='social-links'>
            <li style={{cursor: "pointer"}}>
              <img src={facebook} alt="" />
            </li>
            <li style={{cursor: "pointer"}}>
              <img src={twitter} alt="" />
            </li>
            <li style={{cursor: "pointer"}}>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>
        <div className='footer-title-wrapper'>
          <p className='footer-title'>
            Copyright 2021. All Rights Reserved 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer