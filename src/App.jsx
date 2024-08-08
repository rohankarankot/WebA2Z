import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";

function App() {
  return (
    <>
      <NavbarComponent />
      <RootRouting />
      <FooterComponent />
    </>
  );
}

export default App;
