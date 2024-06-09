import './cartItem.css'
import { currencyFormat } from '../../utils'
import CartButton from '../cartButton/CartButton'


function CartItem({ item }) {
  return (
    <li className='cart-item'>
      <div className='cart-item-img-wrapper'>
        <img src={item.image.desktop} alt={item.name} className='cart-item-img' />
      </div>
      <div className='cart-item-text-wrapper'>
        <p className='cart-item-title'>{item.title}</p>
        <p className='cart-item-price'>{currencyFormat(item.price)}</p>
      </div>
      <div className='cart-item-btn-wrapper'>
        <CartButton itemId={item.id} qty={item.quantity} />
      </div>
    </li>
  )
}

export default CartItem