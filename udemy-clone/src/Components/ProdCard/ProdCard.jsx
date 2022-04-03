import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./prod.css";
import React from "react";
import { MultiItemCarousel } from "../MultiCarousel/MultiItemCarousel";
import { LightTooltip } from "../LandingPage/Landin";
import { PopperCard } from "./popperprodcard";
// export const PopperCard = React.forwardRef(function PopperCard(props, ref) {

export const ProdCard = React.forwardRef(function ProdCard(props, ref) {
  //  Spread the props to the underlying DOM element.

  return (
    <Link
      style={{ height: "auto" }}
      className="prodLink"
      to={`/courses/${props.data?._id}`}
    >
      <div {...props} ref={ref} className="prodcard">
        {/* <Link to="#"> */}
        <img className="prodimg" src={props.data?.image} alt="" />
        <h3 className="card-title">
          {/* <Link to={`/courses/${props.data?._id}`}>{props.data?.title}</Link> */}
          {props.data?.title}
        </h3>
        <div className="author">{props.data?.author}</div>
        <div className="rating-div">
          <span className="rate-num">{props.data?.rating || 4.3}</span>
          <Rating
            name="read-only"
            size="small"
            precision={0.5}
            value={props.data?.rating || 4.3}
            readOnly
          />
          <span className="rate-count">(1200)</span>
        </div>
        <div className="price-bar">
          <span className="price">₹{props.data?.price}</span>
          <span className="oldprice">₹{+props.data?.price + 1000}</span>
        </div>
        {/* </Link> */}
      </div>
    </Link>
  );
});

export const TechCard = () => {
  return (
    <div className="tec-cont">
      <div>
        <h2>Top categories</h2>
        <div className="categories-flex">
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
          <div className="tec-card">
            <img
              className="tec-img"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt=""
            />
            <span>Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SuggestionCard = ({ title, data, category }) => {
  let products = data.filter((el) => el.category === category);

  return (
    <div className="tec-cont">
      <div>
        <h2>{title}</h2>
        <div className="prod-cont">
          {/* <MultiItemCarousel> Students are viewing */}
          {products.map((el) => (
            <LightTooltip
              arrow
              placement="right"
              title={<PopperCard data={el} />}
            >
              <ProdCard data={el} />
            </LightTooltip>
          ))}
          {/* </MultiItemCarousel> */}
        </div>
      </div>
    </div>
  );
};
