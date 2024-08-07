import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import HeroComponent from "./components/HeroSection/Hero.component";
import HighlightComponent from "./components/highlights/highlight.component";
import { useEffect, useState } from "react";
import BodySectionComponent from "./components/bodySection/bodySection.component";
import axios from "axios";

function App() {
  const [products, setter] = useState("initialData");
  console.log("products: ", products);

  const getProducts = async () => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setter(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // const data = await fetch("https://dummyjson.com/products");
    // const actualData = await data.json();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarComponent />
      <HighlightComponent />
      <HeroComponent />

      <div>
        <BodySectionComponent allProducts={products} />
      </div>

      <FooterComponent />
    </>
  );
}

export default App;
