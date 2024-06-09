import "./singleProduct.css";
import { FooterElement, Menu } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { currencyFormat } from "../../utils";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice"

import products from "../../../data/data.json";

function SingleProduct() {
  const { slug } = useParams();
  const [productData, setProductData] = useState(null);
  const [cartNum, setCartNum] = useState(1);
  const dispatch = useDispatch();

  const cartDecrease = () => {
    setCartNum(cartNum - 1);
  };

  const cartIncrease = () => {
    setCartNum(cartNum + 1);
  };

  const addtoChartHandler = () => {
    const cartProduct = {
      id: productData.id,
      price: productData.price,
      quantity: cartNum,
      totalPrice: productData.price,
      name: productData.name,
      image: productData.image,
      title: productData.title,
    }
    dispatch(addItemToCart(cartProduct));
  }

  useEffect(() => {
    const matchedProduct = products.products.find(
      (product) => product.slug === slug
    );
    setProductData(matchedProduct);
  }, [slug]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const {
    includes,
    name,
    image,
    description,
    features,
    gallery,
    price,
    others,
  } = productData;

  const equipmentArr = includes;
  const equipment = equipmentArr.map((eq, index) => {
    return (
      <div key={index} className="single-product-equipment-wrapper">
        <span className="single-product-equipment-title">{eq.quantity}x</span>
        <p className="single-product-equipment">{eq.item}</p>
      </div>
    );
  });

  const othersArr = others;
  const alsoLike = othersArr.map((el, index) => {
    return (
      <div key={index} className="single-product-also-like-wrapper">
        <img
          src={el.image.desktop}
          className="single-product-also-like-img"
          alt=""
        />
        <h5 className="single-product-also-like-title">{el.name}</h5>
        <Link to={`../${el.category}/${el.slug}`}>
          <button className="single-product-also-like-button btn-default-1">
            see product
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div className="single-product-wrapper max-container">
      <div className="single-product-header">
        <Link relative="path" to="..">
          <button className="single-product-header-button body-text">
            go back
          </button>
        </Link>
      </div>
      <section className="single-product-section">
        <div className="signle-prosuct-section-img-wrapper">
          <img
            src={image.desktop}
            className="single-product-section-img"
            alt=""
          />
        </div>
        <div className="single-product-section-text-wrapper">
          {productData.new && (
            <p className="single-product-new-product">new product</p>
          )}
          <h2 className="single-product-section-title">{name}</h2>
          <p className="single-product-section-description body-text">
            {description}
          </p>
          <h6 className="single-product-section-price">
            {currencyFormat(price)}
          </h6>
          <div className="single-product-section-equipment-wrapper">
            <div className="single-product-section-equipment-title">
              <div
                className="single-product-section-equipment-decrease"
                onClick={cartDecrease}
                disabled={cartNum === 0 || (cartNum < 0 && true)}
              >
                -
              </div>
              <div className="single-product-section-equipment-num">
                {cartNum}
              </div>
              <div
                className="single-product-section-equipment-increase"
                onClick={cartIncrease}
              >
                +
              </div>
            </div>
            <button onClick={addtoChartHandler} className="single-product-btn btn-default-1">
              add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="single-product-section-2">
        <div className="single-product-section-2-text-wrapper">
          <h3 className="single-product-section-2-title">Features</h3>
          <div
            className="single-product-section-2-features-wrapper"
            dangerouslySetInnerHTML={{
              __html: features.replace(/\n/g, "<br />"),
            }}
          ></div>
        </div>
        <div className="single-product-section-2-gallery-wrapper">
          <h3 className="single-product-section-2-title">In the box</h3>
          <div className="single-product-section-2-gallery-wrapper-inner">
            {equipment}
          </div>
        </div>
      </section>
      <section className="single-product-section-3">
        <div className="single-product-section-3-text-wrapper">
          <div>
            <img
              src={gallery.first.desktop}
              className="single-product-section-3-img"
              alt=""
            />
          </div>
          <div>
            <img
              src={gallery.second.desktop}
              className="single-product-section-3-img"
              alt=""
            />
          </div>
        </div>
        <div>
            <img
              src={gallery.third.desktop}
              className="single-product-section-3-img"
              alt=""
            />
          </div>
      </section>
      <section className="single-product-section-4">
        <p className="single-product-section-4-title">You may also like</p>
        <div className="single-product-section-4-also-like-wrapper">
          {alsoLike}
        </div>
      </section>
      <section>
        <Menu />
      </section>
      <FooterElement />
    </div>
  );
}

export default SingleProduct;
