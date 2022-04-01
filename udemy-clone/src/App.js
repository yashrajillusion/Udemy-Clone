import logo from "./logo.svg";
import "./App.css";
import { Landigpage } from "./Components/LandingPage/Landin";
import Payment from "./Components/Payment/Payment";

import Wishlist from "./Components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Landigpage />
      <Payment />
      {/* <Wishlist /> */}
    </div>
  );
}

export default App;
