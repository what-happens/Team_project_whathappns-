import { createSlice } from "@reduxjs/toolkit";
import { ParserFactory } from "../utils/parser";
const initialState = {
  questions: [],
  userAnswers: {},
  parsedData: [],
  codeString: "",
  subCode: "",
  selectedQid: null,
  isShowAnswers: false,
  type: "",
  activeTab: "html",
  inCorrectQid: [],
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setParsed(state) {
      if (state.codeString && state.questions.length > 0 && state.type) {
        const parser = ParserFactory[state.type];
        state.parsedData = parser(state.codeString, state.questions);
      }
    },
    setCodeString(state, action) {
      state.codeString = action.payload;
    },
    setSelectedQid(state, action) {
      state.selectedQid = action.payload;
    },
    setIsShowAnswers(state, action) {
      state.isShowAnswers = action.payload;
    },
    setAnswers(state, action) {
      const qid = state.selectedQid;
      const userAnswer = action.payload;
      // q_id를 키로 추가하거나 기존 값 덮어쓰기
      state.userAnswers[qid] = userAnswer;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setSubCode(state, action) {
      state.subCode = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setIncorrectQid(state, action) {
      state.inCorrectQid = action.payload;
    },
    resetExerciseState(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setQuestions,
  setCodeString,
  setParsed,
  setSelectedQid,
  setIsShowAnswers,
  setAnswers,
  setType,
  setSubCode,
  setActiveTab,
  setIncorrectQid,
  resetExerciseState,
} = exerciseSlice.actions;

export default exerciseSlice.reducer;
