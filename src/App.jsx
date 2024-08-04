import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import ItemCardComponent from "./components/itemCard/itemCard.component";
import FooterComponent from "./components/footer/footer.component";
import HeroComponent from "./components/HeroSection/Hero.component";
import HighlightComponent from "./components/highlights/highlight.component";

function App() {
  return (
    <>
      <NavbarComponent />
      <HighlightComponent />
      <HeroComponent />
      <div>
        <ItemCardComponent />
      </div>

      <FooterComponent />
    </>
  );
}

export default App;
