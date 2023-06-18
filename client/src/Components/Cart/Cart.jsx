import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { darken } from "@mui/system";
import { useNavigate } from "react-router";

export const CartPage = () => {
  const [data, setData] = useState([]);
  const loading = useRef(true);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
      .then(({ data }) => {
        loading.current = false;
        setData([...data]);
        console.log(data);
      });
  }, []);
  return (
    <>
      <h1 className="heading">Shopping Cart</h1>
      {loading.current ? (
        <CircularProgress size={"8rem"} className="cart-loader" />
      ) : (
        <div className="cart-body">
          <div className="main">
            <div className="cart-items">
              <p>Courses in Cart</p>
              <div className="cart-items-container">
                {data.map((el) => (
                  <CartProdCard db={el.productId} />
                ))}
              </div>
            </div>
            <div className="total-div">
              <div className="total-price">
                <p>Total: </p>
                <h1>
                  <TotalPrice db={data} />
                </h1>
                {/* <span>{totalAmount}</span> */}
              </div>
              <div className="checkOutButton">
                <button
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  <h4>checkout</h4>
                </button>
              </div>
              <div className="promotion">
                <h4>Promotions</h4>
                <div className="promotion-div">
                  <CloseIcon className="closeicon" />
                  <p>
                    <span>KEEPLEARNING </span>is applied
                  </p>
                </div>
                <div className="inputbtn">
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Coupon"
                  />
                  <button className="applybtn">Apply</button>
                </div>
              </div>
              <div className="last-div">
                <p>Buy now, pay later for orders of $25 and over</p>
                <img
                  className="klarna"
                  src="	https://www.udemy.com/staticx/udemy/images/v8/klarna-logo.svg"
                  alt="klarna"
                />
                <img
                  className="afterPay"
                  src="https://www.udemy.com/staticx/udemy/images/v8/afterpay-logo.svg"
                  alt="after pay"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CartProdCard = ({ db }) => {
  const { title, price, image, _id, level, author, rating } = db;
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="image" />
        </div>
        <div className="title">
          <h4>{title}</h4>
          <p>{author}</p>
          <div className="bestseller-div">
            <button>Bestseller</button>
            <div className="rating">
              <span className="rate-num">{rating || 4.5}</span>
              <Rating
                name="read-only"
                size="small"
                precision={0.5}
                value={rating || 4.5}
                readOnly
              />
              <span className="rate-count">(1200)</span>
            </div>
          </div>
          <div className="list">
            <ul className="list">
              <li>2.5 total hours</li>
              <li>33 lectures</li>
              <li>{level}</li>
            </ul>
          </div>
        </div>
        <div className="add-remove-quant">
          <div className="btn">
            <button onClick={() => {}}>Remove</button>
            <button>Save for Later</button>
            <button> Move to Wishlist</button>
          </div>
        </div>
        <div className="cart-price">
          <h3>₹{price}</h3>
          <LocalOfferIcon className="icon-tag" />
        </div>
      </div>
    </>
  );
};

const TotalPrice = ({ db }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    db.map((el) => {
      total += +el.productId.price;
    });
    setPrice((prev) => total);
  }, []);
  return <div>₹{price}</div>;
};
