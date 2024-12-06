import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store/store";
import QuizLanding from "./pages/quizLanding/quizLanding";
import QuizResult from "./pages/quizResult/quizResult";
// import Quiz from "./pages/quiz/Quiz";
import Exercise from "./pages/exercise/Exercise";
import Study from "./pages/study/Study";
import StudyFinish from "./pages/study/StudyFinish";
import LearningCourse from "./pages/study/LearningCourse";
import AAA from "./pages/study/AAA";
import NotFound from "./pages/notFound/NotFound";
import MyPage from "./pages/myPage/MyPage";
import Review from "./pages/review/Review";
import AuthHeader from "./components/AuthHeader";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from "./redux/authSlice";

function AuthSync() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null; // 렌더링 필요 없음
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthSync />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/quiz-landing" element={<QuizLanding />} />
          <Route path="/quiz" element={<QuizResult />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/study" element={<Study />}></Route>
          <Route path="/study-finish" element={<StudyFinish />}></Route>
          <Route path="/learn-course" element={<LearningCourse />}></Route>
          <Route path="/aaa" element={<AAA />}></Route>
          <Route element={<AuthHeader />}>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/review" element={<Review />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
