import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";
import { CartContext } from "./context/cart.context";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  console.log("cart: ", cart);
  const product = {
    id: 1,
    title: "Paneer Pizza 30'",
    des: "Delicious paneer pizza wih a garlic topping for an extra burst of flavor.",
    rating: 4.5,
    stock: 100,
    vendor: "Dominozz",
    price: 500,
    discount: 10,

    thumbnail:
      "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
    images: [
      "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
      "https://i.pinimg.com/originals/22/94/70/22947071fd9707f6a5daacaad55b7c34.jpg",
    ],
  };
  const add = () => {
    if (cart.length === 0) setCart([...cart, { ...product, qty: 1 }]);
    else {
      cart.map((singleItem) => {
        if (singleItem?.id == product.id) {
          singleItem.qty = singleItem.qty + 1;
          singleItem.price = singleItem.price * singleItem.qty;
        }
      });
    }
  };
  return (
    <div key={cart.length}>
      {/* <CartContext.Provider value={{ cart, setCart }}>
        <NavbarComponent />
        <RootRouting />
        <FooterComponent />
      </CartContext.Provider> */}
      <p>{cart.length}</p>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
