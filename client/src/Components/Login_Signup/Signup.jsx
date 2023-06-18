import "./signup.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HelpIcon from "@mui/icons-material/Help";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Header } from "../Header/Header";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ColorButton } from "../ProdCard/popperprodcard";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [userdata, setUser] = useState({ name: "", email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };
  if (user.token != undefined) {
    console.log(user._id);
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="loginDiv">
        <h4>Sign up Start Learning!</h4>
        <hr className="hr_line_login"></hr>

        <div className="login_inputDiv">
          {error ? (
            <Alert className="alert" severity="error">
              <p>There was a problem creating your account.</p>
              <p>Check that your email address is spelled correctly</p>
            </Alert>
          ) : (
            <></>
          )}
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className="login_pw"
          ></input>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            className="login_pw"
          ></input>

          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Passward"
            className="login_pw"
          ></input>

          <div className="checkboxDiv">
            <input type="checkbox" className="signup_checkbox"></input>
            <label for="signup_checkbox">
              I'm in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>

          {/* <button id="signup_input">
          </button> */}
          <ColorButton
            onClick={() => {
              const URL = "https://udemy-vr4p.onrender.com/join/signup-popup";
              dispatch(authFunction(userdata, URL));
            }}
            id="signup_input"
          >
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Sign up"
            )}
          </ColorButton>

          <h6>
            By signing up you agree to our <a href="#">Terms of use</a> and{" "}
            <a href="#">privacy policy</a>
          </h6>
          <hr className="hr_line_login"></hr>

          <div className="hv_account">
            Alreday have an Account? <a href="#">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
