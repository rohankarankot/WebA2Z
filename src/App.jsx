import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";
import { StoreContext } from "./context/storeContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Amit");
  return (
    <>
      <StoreContext.Provider
        value={{
          value, // value:value  // const data = data+2  ==> data+=1
          setValue: setValue,
        }}
      >
        <NavbarComponent />
        <RootRouting />
        <FooterComponent />
      </StoreContext.Provider>
    </>
  );
}

export default App;
