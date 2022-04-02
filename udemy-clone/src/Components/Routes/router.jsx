import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Landigpage } from "../LandingPage/Landin";
import Login from "../Login_Signup/Login";
import Signup from "../Login_Signup/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landigpage />}></Route>
        <Route path="/join/signup-popup" element={<Signup />}></Route>
        <Route path="/join/login-popup" element={<Login />}></Route>
      </Routes>
    </>
  );
};
