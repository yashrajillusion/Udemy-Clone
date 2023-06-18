import { Link } from "react-router-dom";
import "./poppercard.css";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { addToCartFunction } from "../../Redux/cart/action";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWishlistFunction } from "../../Redux/wishlist/action";

export const PopperCard = ({ data }) => {
  const { cart, loading, error } = useSelector((store) => store.cart);
  const { wishlist, wishlistloading, wishlisterror } = useSelector(
    (store) => store.wishlist
  );
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  return (
    <div className="poppercard">
      <div>
        <Link className="p-title" to={"#"}>
          {data?.title}
        </Link>
      </div>
      <div className="p-date-con">
        <div></div>
        <span className="p-date-up">Updated</span>
        <span className="p-date">December 2021</span>
      </div>
      <div className="p-level">
        <span>All Levels</span>
        <span className="p-sub">Subtitles</span>
      </div>
      <div className="p-desc">{data?.description}</div>
      <div className="highlights">
        {data?.details.map((el) => (
          <PoperPoint text={el} />
        ))}
      </div>
      <div className="p-btn-div">
        {error ? (
          <Alert className="alert" severity="error">
            <p>some thing went wrong</p>
          </Alert>
        ) : (
          <ColorButton
            onClick={() => {
              const cartschema = {
                userId: user?.user._id,
                productId: data._id,
              };
              console.log(cartschema);
              const URL = "https://udemy-vr4p.onrender.com/cart";
              dispatch(addToCartFunction(cartschema, URL));
            }}
          >
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Add to cart"
            )}
          </ColorButton>
        )}

        <button
          className="heart-cir"
          onClick={() => {
            const cartschema = {
              userId: user?.user._id,
              productId: data._id,
            };
            console.log(cartschema);
            const URL = "https://udemy-vr4p.onrender.com/wishlist";
            dispatch(addToWishlistFunction(cartschema, URL));
          }}
        >
          {wishlistloading ? (
            <CircularProgress style={{ color: "black" }} />
          ) : (
            <FavoriteBorderOutlinedIcon fontSize="medium" />
            // <FavoriteIcon fontSize="medium" />
          )}
        </button>
      </div>
    </div>
  );
};

const PoperPoint = ({ text }) => {
  return (
    <div className="point-con">
      <CheckIcon />
      <p>{text}</p>
    </div>
  );
};

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#a435f0",
  height: "2.8rem",
  borderRadius: "0px",
  fontSize: "1rem",
  width: "14rem",
  fontWeight: "700",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#8710d8",
  },
}));

/*
const LikeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "0px",
  border: "1px solid black",
  borderRadius: "50%",
  padding: "0.7rem 0rem",
  //   marginLeft: "0.8rem",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.04)",
  },
}));
 */
