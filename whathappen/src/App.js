import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import QuizLanding from "./pages/quizLanding";
import QuizResult from "./pages/quizResult";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz-landing" element={<QuizLanding />} />
          <Route path="/quiz" element={<QuizResult />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
