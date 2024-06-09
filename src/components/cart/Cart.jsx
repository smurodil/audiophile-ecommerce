import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearChart } from '../../features/cart/cartSlice'
import CartItem from '../cartItem/CartItem'
import { Fragment } from 'react'
import { currencyFormat } from '../../utils' 
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)

  const removeHandler = () => {
    dispatch(clearChart())
  }
  return (
    <div className='cart'>
      <div className='cart-container'>
        <div className='cart-top'>
          <p className='cart-top-left'>
            CART {cart.totalQuantity > 0 ? `(${cart.totalQuantity})` : '(0)'}
          </p>
          {cart.totalQuantity > 0 && <button className='cart-remove-btn' onClick={removeHandler}>
              Remove all
            </button>}
        </div>
        <div className='cart-content'>
        {cart.totalQuantity <= 0 && <p className='cart-no-item'>
            There are no items added in cart.
            </p>}
          <ul className='cart-list'>
            {cart.items.map((item) => (
              <CartItem key={item.id} item={item}/>
            ))}
          </ul>
          {cart.totalQuantity > 0 && (
            <Fragment>
              <div className='fragment'>
                <p className='fragment-total'>
                  Total
                </p>
                <p className='fragment-total-price'>
                  {currencyFormat(cart.totalCartPrice)}
                </p>
              </div>
              <Link to='/checkout'>
                <button className='btn-default-1 btn-checkout'>
                  Checkout
                </button>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart