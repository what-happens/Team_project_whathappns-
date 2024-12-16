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
import AAA from "./pages/study/AAA";
import NotFound from "./pages/notFound/NotFound";
import MyPage from "./pages/myPage/MyPage";
import Review from "./pages/review/ReviewFreeVersion";
import AuthHeader from "./components/AuthHeader";
import ProtectedRoute from "./components/ProtectedRoute";
import JoinSuccess from "./pages/joinSuccess/JoinSuccess";
import ChatbotTest from "./pages/chatbot/ChatbotTest";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "./firebase";
// import { login, logout } from "./redux/authSlice";

function App() {
  // const dispatch = useDispatch();
  // const authState = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(
  //         login({
  //           user: {
  //             email: user.email,
  //             displayName: user.displayName,
  //           },
  //         })
  //       );
  //     } else {
  //       if (!authState.isLoggedIn) {
  //         dispatch(logout());
  //       }
  //     }
  //   });

  //   console.log("Current auth state:", authState);

  //   return () => unsubscribe();
  // }, [dispatch, authState.isLoggedIn]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Joinsuccess" element={<JoinSuccess />} />
        <Route path="/chat-test" element={<ChatbotTest />} />
        <Route
          path="/quizpage"
          element={
            // <ProtectedRoute>
            <QuizPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/exercise"
          element={
            // <ProtectedRoute>
            <Exercise />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/learncourse"
          element={
            // <ProtectedRoute>
            <LearningCourse />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/learnpage"
          element={
            // <ProtectedRoute>
            <LearningPage />
            // </ProtectedRoute>
          }
        />
        {/* test 페이지 입니다...(예진) */}
        <Route path="/aaa" element={<AAA />} />
        <Route
          path="/study"
          element={
            // <ProtectedRoute>
            <Study />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/studyfinish"
          element={
            // <ProtectedRoute>
            <StudyFinish />
            // </ProtectedRoute>
          }
        />

        <Route element={<AuthHeader />}>
          <Route
            path="/mypage"
            element={
              // <ProtectedRoute>
              <MyPage />
              // </ProtectedRoute>
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
