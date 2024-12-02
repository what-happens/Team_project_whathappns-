import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import QuizLanding from "./pages/quizLanding/quizLanding";
import QuizResult from "./pages/quizResult/quizResult";
// import Quiz from "./pages/quiz/Quiz";
import Exercise from "./pages/exercise/Exercise";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/quiz-landing" element={<QuizLanding />} />
          <Route path="/quiz" element={<QuizResult />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
