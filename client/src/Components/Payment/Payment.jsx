import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import CircularProgress from "@mui/material/CircularProgress";

const Payment = () => {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token")) || null;
    if (token != null)
      axios
        .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
        .then(({ data }) => {
          let total = 0;
          data.map((el) => {
            total += el.productId.price;
          });
          setPrice(total);
        });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="payment_form_details">
        {/* right part------------------------------------------ */}
        <div className="form_right">
          <h1>Checkout</h1>
          <p>Billing Address</p>
          <div className="selectplace">
            <div className="select_country">
              {/* <label for = "select_country">Country</label> */}
              <select className="select_country">
                <option value="india">India</option>
                <option value="india">United States</option>
                <option value="india">Europe</option>
              </select>
            </div>
            <div className="select_state">
              {/* <label for = "select_state">Please select... </label> */}
              <select className="select_state">
                <option value="disabled">Please select...</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="kerala">Kerala</option>
              </select>
            </div>
          </div>
          {/* ======================================================================= */}

          <div className="payment_options">
            <div className="creditcard_option">
              <input type="radio" className="input_radio"></input>
              <span className="radio_span">Credit/Debit Card</span>
              <span className="payment_span_images">
                <img src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"></img>
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
                  alt=""
                />
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg"
                  alt=""
                />
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/card-dinersclub.svg"
                  alt=""
                />
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
                  alt=""
                />
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/card-rupay.svg"
                  alt=""
                />
              </span>
            </div>

            <div className="creditcard_option">
              <input type="radio" className="input_radio"></input>
              <span className="radio_span">UPI</span>
              <span className="payment_span_images images_pay">
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/hpp-upi.svg"
                  alt=""
                />
              </span>
            </div>

            <div className="creditcard_option">
              <input type="radio" className="input_radio"></input>
              <span className="radio_span">PayTM</span>
              <span className="payment_span_images images_pay1">
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/hpp-paytm.svg"
                  alt=""
                />
              </span>
            </div>

            <div className="creditcard_option">
              <input type="radio" className="input_radio"></input>
              <span className="radio_span">Net Banking</span>
              <span className="payment_span_images  images_pay2">
                <img
                  src="	https://www.udemy.com/staticx/udemy/images/v9/hpp-billdesk-online.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="creditcard_option">
              <input type="radio" className="input_radio"></input>
              <span className="radio_span">Mobile Wallets</span>
            </div>
          </div>
          {/* ------------------------------------------------------- */}

          <div className="card_detailsDiv">
            <div className="input_cardnameDiv">
              <input
                className="input_cardname"
                type="text"
                placeholder="Name on Card"
              ></input>
            </div>
            <div className="input_cardnumDiv">
              <input
                className="input_cardnum"
                type="text"
                placeholder="Card Number"
              ></input>
            </div>
            <div className="card_validity">
              <div>
                <select className="card_val_month">
                  <options value="disabled">MM</options>
                  <options value="1">01</options>
                  <options value="2">02</options>
                  <options value="3">03</options>
                  <options value="4">04</options>
                  <options value="5">05</options>
                  <options value="6">06</options>
                  <options value="7">07</options>
                  <options value="8">08</options>
                  <options value="9">09</options>
                  <options value="10">10</options>
                  <options value="11">11</options>
                  <options value="12">12</options>
                </select>
              </div>
              <div>
                <select className="card_val_year" placeholder="YYYY">
                  <options value="disabled">YYYY</options>
                  <options value="2022"> 2022</options>
                  <options value="2023"> 2023</options>
                  <options value="2024"> 2024</options>
                  <options value="2025"> 2025</options>
                  <options value="2026"> 2026</options>
                  <options value="2027"> 2027</options>
                  <options value="2028"> 2028</options>
                  <options value="2029"> 2029</options>
                  <options value="2030"> 2030</options>
                </select>
              </div>
              <div className="input_securitynumDiv">
                <input
                  className="input_securitynum"
                  type="text"
                  placeholder="Security Code"
                >
                  {/* <span><FontAwesomeIcon icon="fa-solid fa-lock" /></span> */}
                </input>
              </div>
            </div>

            <div className="checkbox_payment">
              <input type="checkbox" id="checkbox_payment"></input>
              <label for="checkbox_payment">Remember this card</label>
            </div>
          </div>
        </div>

        {/* left part ===================================== */}

        <div className="form_left">
          <h2>Summary</h2>
          <table className="price_table">
            <tr>
              <td>Original price:</td>
              <td>
                <div>
                  <span classname="course_price"> &#8377;{price}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Coupon discounts:</td>
              <td>
                <div classname="course_price">
                  <span> &#8377;{price * 0.1}</span>
                </div>
              </td>
            </tr>
            <hr></hr>
            <tr>
              <td>
                <b>Total:</b>
              </td>
              <td>
                <div classname="course_price">
                  <span>
                    {" "}
                    <b>&#8377;{price != 0 ? price - price * 0.1 : 0} </b>
                  </span>
                </div>
              </td>
            </tr>
          </table>

          <div className="after_total">
            Udemy is required by law to collect applicable transaction taxes for
            purchases made in certain tax jurisdictions
          </div>
          <div className="terms_conditions">
            <span>
              By completing your purchase you agree to these{" "}
              <a href="#">Terms of Service</a>
            </span>
          </div>

          {loading ? (
            <CircularProgress />
          ) : (
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  alert("Payment Succss");
                  navigate("/");
                }, 2000);
              }}
              id="complete_payment"
            >
              Complete Payment
            </button>
          )}
        </div>
      </div>

      {/* ==================================================================================== */}

      <div className="ordersummary">
        <h2>Order Summary</h2>

        <div className="ordersummery_details">
          <div>
            <img
              src="https://img-c.udemycdn.com/course/100x100/354176_fe73_5.jpg"
              alt=""
            />{" "}
          </div>
          <div className="order_course">
            <h4>
              Selenium WebDriver with Java-Basics to Advanced + Frameworks
            </h4>{" "}
          </div>
          <div>
            <div classname="course_price">
              <span>&#8377;455</span>
            </div>
            <div classname="course_price">
              <span>
                <del>&#8377;3,499</del>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
