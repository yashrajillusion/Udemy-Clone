import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Redux/login/action";
import { addToCart } from "../../Redux/cart/action";
export const Header = () => {
  const { cart } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.auth);
  const { wishlist } = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token")) || null;
    if (user.user == null) {
      if (token != null) {
        dispatch(auth(token));
      }
    }
    if (token != null)
      axios
        .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
        .then(({ data }) => {
          console.log(data);
          dispatch(addToCart(data.length));
        });
  }, []);
  return (
    <>
      <header>
        <div className="topnavbar">
          <Link className="udemylink" to={"/"}>
            <img
              className="udemylogo"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt=""
            />
          </Link>
          <nav>
            <button>
              <span className="nav-span">Categories</span>
            </button>
          </nav>
          <div className="searchbar">
            <button>
              <SearchIcon />
            </button>
            <input type="text" name="" placeholder="Search for anything" />
          </div>
          <div>
            <Link className="linkstyle" to={"#"}>
              <span className="nav-span">Udemy Business</span>
            </Link>
          </div>
          <div>
            <Link className="linkstyle" to={"#"}>
              <span className="nav-span">Teach on Udemy</span>
            </Link>
          </div>
          {user?.user != null ? (
            <div>
              <Link className="linkstyle" to={"#"}>
                <span className="nav-span">My learning</span>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* testing */}
          {user?.user != null ? (
            <div>
              <Link to={"/wishlist"}>
                <button className="cart">
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          <div>
            <Link to={"/cart"}>
              <button className="cart">
                <Badge color="secondary" badgeContent={cart}>
                  <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                </Badge>
              </button>
            </Link>
          </div>
          {user?.user != null ? (
            <div>
              <Link to={"#"}>
                <button className="cart">
                  <Badge color="secondary" badgeContent={0}>
                    <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                  </Badge>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          {user?.user != null ? (
            <div>
              <Link to={"#"}>
                <button className="cart">
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                      {user.user != null
                        ? user.user?.name[0].toUpperCase()
                        : null}
                    </Avatar>
                  </Badge>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* testing */}

          {user?.user != null ? (
            ""
          ) : (
            <div>
              <Link to={"/join/login-popup"}>
                <button className="login">Log in</button>
              </Link>
            </div>
          )}
          {user?.user != null ? (
            ""
          ) : (
            <div>
              <Link to={"/join/signup-popup"}>
                <button className="signup">Sign up</button>
              </Link>
            </div>
          )}
          {user?.user != null ? (
            ""
          ) : (
            <div>
              <Link to={"#"}>
                <button className="lang">
                  <LanguageIcon />
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
