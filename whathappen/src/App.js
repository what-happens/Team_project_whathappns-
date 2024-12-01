import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Quiz from "./pages/quiz/Quiz";
import Home from "./pages/Home";
import Exercise from "./pages/exercise/Exercise";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
