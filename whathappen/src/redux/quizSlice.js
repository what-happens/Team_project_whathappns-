import { createSlice } from "@reduxjs/toolkit";
import { Category, Limits, QuizStep } from "../constants/quizConstants";
import { processQuizData } from "../utils/quizUtils";

const initialState = {
  step: QuizStep.LANDING,
  QuizStep,
  category: Category.HTML,
  limit: 5,
  isLoading: false,
  quiz: [],
  incorrectQuizIds: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextStep(state) {
      if (state.step < QuizStep.RESULT) {
        state.step += 1;
      }
    },
    prevStep(state) {
      if (state.step > QuizStep.LANDING) {
        state.step -= 1;
      }
    },
    resetStep(state) {
      state.step = QuizStep.LANDING;
      state.incorrectQuizIds = [];
    },
    setCategory(state, action) {
      if (Category[action.payload]) {
        //객체의 키로 설정하여 유효성 판단
        state.category = action.payload;
      }
    },
    setLimit(state, action) {
      if (Limits[action.payload]) {
        state.limit = action.payload;
      }
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setQuizData(state, action) {
      state.quiz = processQuizData(action.payload);
    },

    setIncorrectQuizIds(state, action) {
      state.incorrectQuizIds = action.payload;
    },
  },
});

export const {
  nextStep,
  prevStep,
  resetStep,
  setCategory,
  setLimit,
  setLoading,
  setQuizData,
  setIncorrectQuizIds,
} = quizSlice.actions;
export default quizSlice.reducer;