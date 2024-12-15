import { createSlice } from "@reduxjs/toolkit";

const QuizStep = {
  LANDING: 0,
  PLAYING: 1,
  RESULT: 2,
};

const Category = {
  HTML: "HTML",
  CSS: "CSS",
};

const Limits = {
  5: true,
  10: true,
  15: true,
  20: true,
};

const initialState = {
  step: QuizStep.LANDING,
  QuizStep,
  category: Category.HTML,
  limit: 5,
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
  },
});

export const { nextStep, prevStep, resetStep, setCategory, setLimit } =
  quizSlice.actions;
export default quizSlice.reducer;
