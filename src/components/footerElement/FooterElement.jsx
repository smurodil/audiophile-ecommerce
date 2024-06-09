import heroImg from '/assets/shared/desktop/image-best-gear.jpg'
import './footerElement.css'

function FooterElement() {
  return (
    <div className='footer-element max-container'>
      <div className='footer-element-container'>
        <div className='footer-element-container-left'>
          <h2 className='footer-element-container-left-title'>
            Bringing you the <span className='best'>best</span> audio gear
          </h2>
          <small className='footer-element-container-left-text body-text'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </small>
        </div>
        <div>
          <img className='hero-img' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FooterElement