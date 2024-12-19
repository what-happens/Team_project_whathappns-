import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import QuizPage from "./pages/quiz/QuizPage";
import Exercise from "./pages/exercise/Exercise";
import Study from "./pages/study/Study";
import StudyFinish from "./pages/study/StudyFinish";
import LearningCourse from "./pages/study/LearningCourse";
import LearningPage from "./pages/study/LearningPage";
import NotFound from "./pages/notFound/NotFound";
import MyPage from "./pages/myPage/MyPage";
import Review from "./pages/review/ReviewFreeVersion";
import AuthHeader from "./components/AuthHeader";
import ProtectedRoute from "./components/ProtectedRoute";
import JoinSuccess from "./pages/joinSuccess/JoinSuccess";
import ParentPage from "./pages/study/p";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/aaa/*" element={<ParentPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/exercise/:stage/:level" element={<Exercise />} />
          <Route path="/learncourse" element={<LearningCourse />} />
          <Route path="/learnpage" element={<LearningPage />} />
          <Route path="/study" element={<Study />} />
          <Route path="/studyfinish" element={<StudyFinish />} />

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
