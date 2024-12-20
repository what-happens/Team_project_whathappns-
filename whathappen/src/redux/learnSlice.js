import { createSlice } from "@reduxjs/toolkit";

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
};

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
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
    setType(state, action) {
      state.type = action.payload;
    },
    setSubCode(state, action) {
      state.subCode = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
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
} = learnSlice.actions;

export default learnSlice.reducer;
