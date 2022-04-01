import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./prod.css";
import React from "react";
// export const PopperCard = React.forwardRef(function PopperCard(props, ref) {

export const ProdCard = React.forwardRef(function ProdCard(props, ref) {
  //  Spread the props to the underlying DOM element.

  return (
    <div {...props} ref={ref} className="prodcard">
      <img
        className="prodimg"
        src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
        alt=""
      />
      <h3 className="card-title">
        <Link to={"#"}>
          Learn Python: The Complete Python Programming Course
        </Link>
      </h3>
      <div className="author">Avinash Jain, The Codex</div>
      <div className="rating-div">
        <span className="rate-num">4.3</span>
        <Rating
          name="read-only"
          size="small"
          precision={0.5}
          value={4.5}
          readOnly
        />
        <span className="rate-count">(1200)</span>
      </div>
      <div className="price-bar">
        <span className="price">₹455</span>
        <span className="oldprice">₹655</span>
      </div>
    </div>
  );
});

/*
export const ProdCard = () => {
  return (
    <div className="prodcard">
      <img
        className="prodimg"
        src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
        alt=""
      />
      <h3 className="card-title">
        <Link to={"#"}>
          Learn Python: The Complete Python Programming Course
        </Link>
      </h3>
      <div className="author">Avinash Jain, The Codex</div>
      <div className="rating-div">
        <span className="rate-num">4.3</span>
        <Rating
          name="read-only"
          size="small"
          precision={0.5}
          value={4.5}
          readOnly
        />
        <span className="rate-count">(1200)</span>
      </div>
      <div className="price-bar">
        <span className="price">₹455</span>
        <span className="oldprice">₹655</span>
      </div>
    </div>
  );
};
*/
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

export const SuggestionCard = () => {
  return (
    <div className="tec-cont">
      <div>
        <h2>Students are viewing</h2>
        <div className="prod-cont">
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </div>
      </div>
    </div>
  );
};
