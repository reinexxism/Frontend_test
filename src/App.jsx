import GlobalStyle from "./styles/GlobalStyle";
import EntireContainer from "./components/EntireContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <EntireContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
