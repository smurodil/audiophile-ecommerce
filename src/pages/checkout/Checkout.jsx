import './checkout.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import cashIcon from '/assets/checkout/icon-cash-on-delivery.svg'
import orderLogo from "/assets/checkout/icon-order-confirmation.svg";
import { useState } from "react";
import { currencyFormat } from '../../utils'

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("e-Money");

  const handlePaymentMethod = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\+\d{1,3} \d{3}-\d{3}-\d{4}$|^\d{9}$/.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};

    if (formData.name.trim() === "") {
      newFormErrors.name = "Name is required";
    }
    if (formData.address.trim() === "") {
      newFormErrors.address = "Address is required";
    }
    if (formData.zipCode.trim() === "") {
      newFormErrors.zipCode = "ZIP Code is required";
    }
    if (formData.city.trim() === "") {
      newFormErrors.city = "City is required";
    }
    if (formData.country.trim() === "") {
      newFormErrors.country = "Country is required";
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required";
    } else {
      const emailIsValid = validateEmail(formData.email);
      if (!emailIsValid) {
        newFormErrors.email = "Invalid email format";
      }
    }

    if (formData.phoneNumber.trim() === "") {
      newFormErrors.phoneNumber = "Phone number is required";
    } else {
      const phoneNumberIsValid = validatePhoneNumber(formData.phoneNumber);
      if (!phoneNumberIsValid) {
        newFormErrors.phoneNumber = "Invalid phone number format";
      }
    }

    if (selectedPaymentMethod === "e-Money") {
      if (formData.eMoneyNumber.trim() === "") {
        newFormErrors.eMoneyNumber = "Number is required";
      }
      if (formData.eMoneyPin.trim() === "") {
        newFormErrors.eMoneyPin = "PIN is required";
      }
    }

    setFormErrors(newFormErrors);

    const isFormInvalid = Object.values(newFormErrors).some(
      (error) => error !== ""
    );

    if (!isFormInvalid) {
      setOrder(true);
    }
  };


  const cartItems = cart.items.map((item, index) => {
    return (
      <div key={index} className="cart-items-checkout">
        <div className="cart-items-container">
          <div>
            <img
              src={item.image.desktop}
              className="cart-items-icon"
              alt=""
            />
          </div>
          <div className="cart-items-text-wrapper">
            <p className="cart-item-name">
              {item.title}
            </p>
            <p>{currencyFormat(item.price)}</p>
          </div>
        </div>
        <div className="cart-item-quantity-wrapper">
          <p className="cart-item-quantity">x{item.quantity}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="checkout">
      <div className="checkout-container max-container">
        <div>
          <Link relative="path" to="..">
            <button className="checkout-go-back-btn">
              Go Back
            </button>
          </Link>
        </div>
        <div className="checkout-section-wrapper">
          <section className="checkout-section-1">
            <h3 className="checkout-title">
              Checkout
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="checkout-form-top">
                <p className="checkout-building-details">
                  Billing Details
                </p>
                <div className="checkout-user-wrappper">
                  <div className="checkout-building-wrapper">
                    <div className="checkout-user-info-wrapper">
                      <div className="checkout-name-wrapper">
                        <label
                          className={`checkout-label ${formErrors.name ? "text-error" : "error-black"
                            }`}
                        >
                          Name
                        </label>
                        <p className="checkout-form-title">
                          {formErrors.name}
                        </p>
                      </div>
                      <input
                        className={`checkout-input ${formErrors.name ? "input-error" : ""
                          }`}
                        type="text"
                        name="name"
                        placeholder="Alexei Ward"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="checkout-email-info">
                      <div className="checkout-email-wrapper">
                        <label
                          className={`checkout-label ${formErrors.email ? "text-error" : "error-black"
                            }`}
                        >
                          Email Adress
                        </label>
                        <p className="checkout-form-title">
                          {formErrors.email}
                        </p>
                      </div>
                      <input
                        className={`checkout-input ${formErrors.email ? "input-error" : ""
                          }`}
                        type="text"
                        name="email"
                        placeholder="alexei@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="checkout-number-info">
                    <div className="checkout-phone-number-wrapper">
                      <label
                        className={`checkout-label ${formErrors.phoneNumber ? "text-error" : "error-black"
                          }`}
                      >
                        Phone number
                      </label>
                      <p className="checkout-form-title">
                        {formErrors.phoneNumber}
                      </p>
                    </div>
                    <input
                      className={`checkout-input ${formErrors.phoneNumber ? "input-error" : ""
                        }`}
                      type="text"
                      name="phoneNumber"
                      placeholder="+1 202-555-0136"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-shopping-info-wrapper">
                <p className="shopping-info-title">
                  Shipping Info
                </p>
                <div className="checkout-user-adress-info">
                  <div className="checkout-adress-info">
                    <div className="checkout-adress-wrapper">
                      <label
                        className={`checkout-label ${formErrors.address ? "text-error" : "error-black"
                          }`}
                      >
                        Address
                      </label>
                      <p className="checkout-form-title">
                        {formErrors.address}
                      </p>
                    </div>
                    <input
                      className={`checkout-input ${formErrors.address ? "input-error" : ""
                        }`}
                      type="text"
                      name="address"
                      placeholder="1137 Williams Avenue"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout-code-info-wrapper">
                    <div className="checkout-zip-code-info">
                      <div className="checkout-zip-code-wrapper">
                        <label
                          className={`checkout-label ${formErrors.zipCode ? "text-error" : "error-black"
                            }`}
                        >
                          ZIP Code
                        </label>
                        <p className="checkout-form-title">
                          {formErrors.zipCode}
                        </p>
                      </div>
                      <input
                        className={`checkout-input ${formErrors.zipCode ? "input-error" : ""
                          }`}
                        type="text"
                        name="zipCode"
                        placeholder="10001"
                        maxLength={5}
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="checkout-city-info">
                      <div className="checkout-city-wrapper">
                        <label
                          className={`checkout-label ${formErrors.city ? "text-error" : "error-black"
                            }`}
                        >
                          City
                        </label>
                        <p className="checkout-form-title">
                          {formErrors.city}
                        </p>
                      </div>
                      <input
                        className={`checkout-input ${formErrors.city ? "input-error" : ""
                          }`}
                        type="text"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="checkout-country-info">
                    <div className="checkout-country-wrapper">
                      <label
                        className={`checkout-label ${formErrors.country ? "text-error" : "error-black"
                          }`}
                      >
                        Country
                      </label>
                      <p className="checkout-form-title">
                        {formErrors.country}
                      </p>
                    </div>
                    <input
                      className={`checkout-input ${formErrors.country ? "input-error" : ""
                        }`}
                      type="text"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-payment-details">
                <div className="checkout-payment-text-wrapper">
                  <p className="checkout-payment-text">
                    Payment Details
                  </p>
                </div>

                <div className="checkout-payment-details-content">
                  <label className="checkout-payment-methods-text">
                    Payment Methods
                  </label>
                  <div className="checkout-payment-content">
                    <div className="checkout-payment-emoney">
                      <input
                        type="radio"
                        className="emoney-input"
                        name="payment"
                        value="e-Money"
                        checked={selectedPaymentMethod === "e-Money"}
                        onChange={handlePaymentMethod}
                      />
                      <label className="emoney-label">
                        e-Money
                      </label>
                    </div>
                    <div className="checkout-payment-cash-on-delivery">
                      <input
                        type="radio"
                        className="cash-on-delivery-input"
                        name="payment"
                        value="Cash on Delivery"
                        checked={selectedPaymentMethod === "Cash on Delivery"}
                        onChange={handlePaymentMethod}
                      />
                      <label className="cash-on-delivery-label">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {selectedPaymentMethod === "e-Money" && (
                <div className="checkout-emoney-info">
                  <div className="checkout-emoney-info-wrapper">
                    <div className="checkout-emoney-wrapper">
                      <label
                        className={`checkout-label ${formErrors.eMoneyNumber
                          ? "text-error"
                          : "error-black"
                          }`}
                      >
                        e-Money Number
                      </label>
                      <p className="checkout-form-title">
                        {formErrors.eMoneyNumber}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="238521993"
                      className={`checkout-input ${formErrors.eMoneyNumber ? "input-error" : ""
                        }`}
                      maxLength={9}
                    />
                  </div>
                  <div className="checkout-emoney-bottom">
                    <div className="checkout-emoney-bottom-wrapper">
                      <label
                        className={`checkout-label ${formErrors.eMoneyPin ? "text-error" : "error-black"
                          }`}
                      >
                        e-Money PIN
                      </label>
                      <p className="checkout-form-title">
                        {formErrors.eMoneyPin}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="6891"
                      className={`checkout-input ${formErrors.eMoneyPin ? "input-error" : ""
                        }`}
                      maxLength={4}
                    />
                  </div>
                </div>
              )}
              {selectedPaymentMethod === "Cash on Delivery" && (
                <div className="cash-on-delivery">
                  <img src={cashIcon} />
                  <p className="cash-on-delivery-text">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </form>
          </section>
          <section className="summary">
            <div>
              <h6 className="summary-title">
                Summary
              </h6>
            </div>
            <div className="summary-cart-items-wrapper">
              {cartItems}
            </div>
            <div className="summary-items-wrapper">
              <div className="summary-items-text-wrapper">
                <p className="summary-items-text">
                  Total
                </p>
                <h6 className="summary-items-prices">
                  {currencyFormat(cart.totalCartPrice)}
                </h6>
              </div>
              <div className="summary-items-text-wrapper">
                <p className="summary-items-text">
                  Shipping
                </p>
                <h6 className="summary-items-prices">
                  {currencyFormat(cart.shippingCost)}
                </h6>
              </div>
              <div className="summary-items-text-wrapper">
                <p className='summary-items-bottom-text'>
                  Vat (Included)
                </p>
                <h6 className="summary-items-prices">
                  {currencyFormat(Math.floor(cart.totalCartPrice * 0.2))}
                </h6>
              </div>
              <div className='summary-items-text-wrapper'>
                <p className="summary-items-bottom-text">
                  Grand Total
                </p>
                <h6 className="summary-total-price">
                  {currencyFormat(Math.floor(cart.totalCartPrice + cart.shippingCost + cart.totalCartPrice * 0.2))}
                </h6>
              </div>
            </div>
            <div className="summary-btn-wrapper">
              <button onClick={handleFormSubmit} className="summary-btn btn-default-1">
                Continue & Pay
              </button>
            </div>
          </section>
        </div>
        {order && (
          <>
            <div className='order-bg' />
            <section className='order-section'>
              <div>
                <img src={orderLogo} />
              </div>
              <h3 className='order-title'>
                Thank you for your order
              </h3>
              <p className='order-text'>
                You will receive an email confirmation shortly.
              </p>
              <div className='order-items-wrapper-info'>
                <div className='order-items-wrapper'>
                  {cartItems}
                </div>
                <div className='order-text-wrapper'>
                  <p className='order-total-price'>
                    Grand Total
                  </p>
                  <h6 className='order-total-price-num'>
                    {currencyFormat(Math.floor(cart.totalCartPrice + cart.shippingCost + cart.totalCartPrice * 0.2))}
                  </h6>
                </div>
              </div>
              <Link to='/' className='order-link'>
                <button className='order-bottom btn-default-1'>
                  Back to Home
                </button>
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout