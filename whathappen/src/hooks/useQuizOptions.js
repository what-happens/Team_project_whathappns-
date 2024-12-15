import { useDispatch, useSelector } from "react-redux";
import { setCategory, setLimit } from "../redux/quizSlice";

const useQuizOptions = () => {
  const dispatch = useDispatch();
  const { category, limit } = useSelector((state) => state.quiz);
  const selectCategory = (newCategory) => {
    dispatch(setCategory(newCategory));
  };
  const selectLimit = (newLimit) => {
    dispatch(setLimit(newLimit));
  };

  return {
    category,
    limit,
    selectCategory,
    selectLimit,
  };
};

export default useQuizOptions;
