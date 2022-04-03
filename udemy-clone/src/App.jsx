import logo from "./logo.svg";
import "./App.css";
import { Landigpage } from "./Components/LandingPage/Landin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Payment from "./Components/Payment/Payment";
// import ".Components/Header/header.css";
import Login from "./Components/Login_Signup/Login";
// import Signup from "./Components/Login_Signup/Signup";

import Wishlist from "./Components/Wishlist/Wishlist";
import { AllRoutes } from "./Components/Routes/router";

function App() {
  return (
    <div>
      <AllRoutes />
    </div>
  );
}

export default App;
