import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import QuizPage from "./pages/quiz/QuizPage";
import Exercise from "./pages/exercise/Exercise";
import Study from "./pages/study/Study";
import NotFound from "./pages/notFound/NotFound";
import MyPage from "./pages/myPage/MyPage";
import Review from "./pages/review/ReviewFreeVersion";
import AuthHeader from "./components/AuthHeader";
import ProtectedRoute from "./components/ProtectedRoute";
import JoinSuccess from "./pages/joinSuccess/JoinSuccess";
import LoginRoute from "./components/LoginRoute";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<LoginRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>

        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/*" element={<NotFound />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/exercise/:stage/:level" element={<Exercise />} />
          <Route path="/study/*" element={<Study />} />

          <Route element={<AuthHeader />}>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
