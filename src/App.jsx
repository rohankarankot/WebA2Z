import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";
import { CartContext } from "./context/cart.context";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(20);
  const [location, setLocation] = useState("default");
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
