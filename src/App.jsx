import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";
import { CartContext } from "./context/cart.context";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserLocation } from "./helpers/geolocation";

function App() {
  const [cart, setCart] = useState(20);
  const [location, setLocation] = useState({
    address: { city: "fetching location" }
  });


  useEffect(() => {

    getUserLocation(setLocation);
  }, [])



  return (
    <>
      <CartContext.Provider value={{ cart, setCart, location, setLocation }}>
        <NavbarComponent />
        <RootRouting />
        <FooterComponent />
      </CartContext.Provider>
    </>
  );
}

export default App;
