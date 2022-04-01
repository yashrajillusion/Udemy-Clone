import logo from "./logo.svg";
import "./App.css";
import { Landigpage } from "./Components/LandingPage/Landin";
// import Payment from "./Components/Payment/Payment";
// import ".Components/Header/header.css";
// import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";



import Wishlist from "./Components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      {/* <Landigpage /> */}
      {/* <Payment /> */}
      {/* <Wishlist /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
