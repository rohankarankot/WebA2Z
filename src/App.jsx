import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import ItemCardComponent from "./components/itemCard/itemCard.component";
import FooterComponent from "./components/footer/footer.component";
import HeroComponent from "./components/HeroSection/Hero.component";
import HighlightComponent from "./components/highlights/highlight.component";
import { useEffect, useState } from "react";
import BodySectionComponent from "./components/bodySection/bodySection.component";
import data from "./mock/feed.json";
function App() {
  const [products, setter] = useState("initialData");

  useEffect(() => {
    setter(data.data);
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
