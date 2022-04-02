import { Link } from "react-router-dom";
import "./header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export const Header = () => {
  const [login, setLogin] = useState(true);
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
          {login ? (
            <div>
              <Link className="linkstyle" to={"#"}>
                <span className="nav-span">My learning</span>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* testing */}
          {login ? (
            <div>
              <Link to={"#"}>
                <button className="cart">
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          <div>
            <Link to={"#"}>
              <button className="cart">
                <Badge color="secondary" badgeContent={5}>
                  <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                </Badge>
              </button>
            </Link>
          </div>
          {login ? (
            <div>
              <Link to={"#"}>
                <button className="cart">
                  <Badge color="secondary" badgeContent={10}>
                    <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                  </Badge>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          {login ? (
            <div>
              <Link to={"#"}>
                <button className="cart">
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>Y</Avatar>
                  </Badge>
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* testing */}

          {login ? (
            ""
          ) : (
            <div>
              <Link to={"#"}>
                <button className="login">Log in</button>
              </Link>
            </div>
          )}
          {login ? (
            ""
          ) : (
            <div>
              <Link to={"#"}>
                <button className="signup">Sign up</button>
              </Link>
            </div>
          )}
          {login ? (
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
