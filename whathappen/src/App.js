import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
