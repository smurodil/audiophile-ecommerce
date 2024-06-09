import './landing.css'
import { FooterElement, Menu } from '../../components'
import { Link } from 'react-router-dom'

import desktopZX9 from '/assets/home/desktop/image-speaker-zx9.png'
import desktopZX7 from '/assets/home/desktop/image-speaker-zx7.jpg'

function Landing() {
  return (
    <div>
      <header className='header'>
        <div className='header-container max-container'>
          <div className='header-text-wrapper'>
            <p className='new-product'>New Product</p>
            <h1 className='header-title'>
              XX99 Mark II
              Headphones
            </h1>
            <p className='header-description'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to='headphones/xx99-mark-two-headphones'>
              <button className='header-button btn-default-1'>
                See Product
              </button>
            </Link>
          </div>
        </div>
      </header>
      <section className='max-container'>
        <Menu />
      </section>
      <section className='section-1 max-container'>
        <div className='zx9-wrapper'>
          <div className='zx9-img-wrapper'>
            <img src={desktopZX9} alt="" className='zx9-img' />
          </div>
          <div className='zx9-text-wrapper'>
            <h2 className='zx9-title'>
              ZX9 Speaker
            </h2>
            <p className='zx9-description'>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link to='speakers/zx9-speaker'>
              <button className='zx9-button'>
                See Product
              </button>
            </Link>
          </div>
        </div>

        <div className='zx7-wrapper'>
          <img src={desktopZX7} alt="" className='zx7-img' />
          <div className='zx7-text-wrapper'>
            <h4 className='zx7-title'>
              ZX7 Speaker
            </h4>
            <Link to='speakers/zx7-speaker'>
              <button className='zx7-button'>
                See Product
              </button>
            </Link>
          </div>
        </div>

        <div className='yx1-wrapper'>
          <div className='yx1-container'></div>
            <div className='yx1-right'>
              <div className='yx1-text-wrapper'>
                <h4 className='yx1-title'>
                  YX1 Earphones
                </h4>
                <Link to='earphones/yx1-earphones'>
                  <button className='yx1-button btn-default-2'>
                    See Product
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </section>

      <section className='section-2 max-container'>
        <FooterElement />
      </section>
    </div>
  )
}

export default Landing