import { useDispatch, useSelector } from "react-redux";
import { setQuizData, setLoading } from "../redux/quizSlice";

const useFetchQuiz = () => {
  const { category, limit, isLoading, incorrectQuiz } = useSelector(
    (state) => state.quiz
  ); // 선택된 카테고리와 제한 가져오기
  const dispatch = useDispatch();

  const getQuiz = async () => {
    try {
      dispatch(setLoading(true)); // 로딩 시작
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/quiz?category=${category}&limit=${limit}`,
        { credentials: "include" }
      );
      const data = await response.json();
      dispatch(setQuizData(data.quiz)); // Redux에 섞인 데이터 저장
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      dispatch(setLoading(false)); // 로딩 종료
    }
  };

  const postQuizResult = async () => {
    try {
      dispatch(setLoading(true)); // 로딩 시작
      const response = await fetch(`${process.env.REACT_APP_API_URL}/review`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review: incorrectQuiz,
        }),
        credentials: "include",
      });
      const data = await response.json();
      return data.review;
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(setLoading(false)); // 로딩 종료
    }
  };

  return { getQuiz, postQuizResult, isLoading }; // 필요한 함수와 상태 반환
};

export default useFetchQuiz;
