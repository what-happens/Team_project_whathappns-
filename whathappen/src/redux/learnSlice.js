import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  stageId: 0,
  level: 0,
  userAnswers: {},
  parsedData: [],
  codeString: "",
  selectedQid: null,
  isShowAnswers: false,
};

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setStageId(state, action) {
      state.stageId = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    setParsed(state, action) {
      state.parsedData = action.payload;
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
  },
});

export const {
  setQuestions,
  setStageId,
  setLevel,
  setCodeString,
  setParsed,
  setSelectedQid,
  setIsShowAnswers,
  setAnswers,
} = learnSlice.actions;

export default learnSlice.reducer;
