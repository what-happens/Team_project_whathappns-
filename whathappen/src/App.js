import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
// import JoinSuccess from "./pages/joinSuccess/JoinSuccess";
import QuizPage from "./pages/quiz/QuizPage";
import Exercise from "./pages/exercise/Exercise";
import Study from "./pages/study/Study";
import StudyFinish from "./pages/study/StudyFinish";
import LearningCourse from "./pages/study/LearningCourse";
import AAA from "./pages/study/AAA";
import LearningPage from "./pages/study/LearningPage";
import NotFound from "./pages/notFound/NotFound";
import MyPage from "./pages/myPage/MyPage";
import Review from "./pages/review/ReviewFreeVersion";
import AuthHeader from "./components/AuthHeader";
import ProtectedRoute from "./components/PrortectedRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login, logout } from "./redux/authSlice";

// import QuizLanding from "./pages/quizLanding/QuizLanding";
// import QuizResult from "./pages/quizResult/QuizResult";
// import Quiz from "./pages/quiz/Quiz";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            user: {
              email: user.email,
              displayName: user.displayName,
            },
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/exercise" element={<Exercise />} />

        {/* 보호된 라우트 */}
        <Route
          path="/learn-course"
          element={
            <ProtectedRoute>
              <LearningCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn-page"
          element={
            <ProtectedRoute>
              <LearningPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aaa"
          element={
            <ProtectedRoute>
              <AAA />
            </ProtectedRoute>
          }
        />
        <Route
          path="/study"
          element={
            <ProtectedRoute>
              <Study />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studyfinish"
          element={
            <ProtectedRoute>
              <StudyFinish />
            </ProtectedRoute>
          }
        />

        {/* AuthHeader와 함께 보호된 라우트 */}
        <Route element={<AuthHeader />}>
          <Route
            path="/mypage"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/review"
            element={
              <ProtectedRoute>
                <Review />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
