import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";
import { CartContext } from "./context/cart.context";
import { useEffect, useState } from "react";
import { getUserLocation } from "./helpers/geolocation";
import HighlightComponent from "./components/highlights/highlight.component";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
      <Provider store={store}>

        <CartContext.Provider value={{ cart, setCart, location, setLocation }}>
          <HighlightComponent />
          {/* <NavbarComponent />
        <RootRouting />
        <FooterComponent /> */}
        </CartContext.Provider>
      </Provider>
    </>
  );
}

export default App;
