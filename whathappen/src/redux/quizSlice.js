import { createSlice } from "@reduxjs/toolkit";

const QuizStep = {
  LANDING: 0,
  PLAYING: 1,
  RESULT: 2,
};

const initialState = {
  step: QuizStep.LANDING,
  QuizStep,
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
  },
});

export const { nextStep, prevStep, resetStep } = quizSlice.actions;
export default quizSlice.reducer;
