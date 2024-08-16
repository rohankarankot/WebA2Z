import "./App.css";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";
import RootRouting from "./Routing";

function App() {
  const input = "a1b10";
  let curr;
  let res = [];

  let input1 = input.split("");
  input1?.map((element, index) => {
    curr = element;
    if (!!Number(element)) {
      console.log(
        "!!Number(element) && !!Number(input1[index + 1]): ",
        !!Number(element) && !!Number(input1[index + 1])
      );
      if (!!Number(element) && !!Number(input1[index + 1])) {
        console.log(`${element}${input1[index + 1]}`);
      }
    } else console.log("element: ", element);
  });

  return (
    <>
      {/* <NavbarComponent />
      <RootRouting />
      <FooterComponent /> */}
      hello
    </>
  );
}

export default App;
