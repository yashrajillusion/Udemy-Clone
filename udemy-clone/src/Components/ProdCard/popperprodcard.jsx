import { Link } from "react-router-dom";
import "./poppercard.css";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";

export const PopperCard = () => {
  return (
    <div className="poppercard">
      <div>
        <Link className="p-title" to={"#"}>
          The Data Analyst Course: Complete Data Analyst Bootcamp 2022
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
      <div className="p-desc">
        Complete Data Analyst Training: Python, NumPy, Pandas, Data Types, Data
        Visualization
      </div>
      <div className="highlights">
        {[
          "The course resume with complete that provide all the things to become",
          "The course resume with complete that provide all the things to become",
          "The course resume with complete that provide all the things to become",
        ].map((el) => (
          <PoperPoint text={el} />
        ))}
      </div>
      <div className="p-btn-div">
        <ColorButton>Add to cart</ColorButton>
        <button className="heart-cir">
          <FavoriteBorderOutlinedIcon fontSize="medium"></FavoriteBorderOutlinedIcon>
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
