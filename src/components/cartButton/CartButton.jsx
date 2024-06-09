import './cartButton.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, incereaseCartItem } from '../../features/cart/cartSlice'

function CartButton({ itemId }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((item) => item.id === itemId))

  const decreaseHandle = () => {
    dispatch(removeItemFromCart(itemId))
  }

  const increaseHandle = () => {
    dispatch(incereaseCartItem(itemId))
  }

  return (
    <div className='cart-btn-wrapper'>
      <button className='cart-button' onClick={decreaseHandle}>-</button>
      <span className='btn-quantity'>{cartItem ? cartItem.quantity : 0}</span>
      <button className='cart-button' onClick={increaseHandle}>+</button>
    </div>
  )
}

export default CartButton